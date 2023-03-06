function limit(awaitable) {
  let inProgress = false;
  let nextTask = awaitable;
  let nextArgs;
  function func(...args) {
    if (inProgress) {
      nextTask = awaitable;
      nextArgs = args;
    } else {
      if (nextTask) {
        nextTask.apply(this, args).then(() => {
          inProgress = false;
          func(...nextArgs);
        });
        inProgress = true;
        nextTask = null;
        return;
      }
      nextTask?.apply(this, args).then(() => {
        inProgress = false;
        func(...nextArgs);
      });
      nextTask = null;
      inProgress = true;
    }
  }

  return func;
}

const job = async (durationMs, id) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("ID: ", id);
      resolve();
    }, durationMs)
  );

const limitedJob = limit(job);

// Timer: 0;
setTimeout(() => limitedJob(700, 1), 0); // Заупскается, ожидание разрешится через 700 мс
setTimeout(() => limitedJob(4000, 2), 100); // Запрос 2 ставится в очередь
setTimeout(() => limitedJob(300, 3), 200); // Запрос 2 удаляется, запрос 3 ставится в очередь
setTimeout(() => limitedJob(800, 4), 300); // Запрос 3 удаляется, запрос 4 ставится в очередь
setTimeout(() => limitedJob(1200, 5), 400); // Запрос 4 удаляется, запрос 5 ставится в очередь
// // Timer: 700. Запрос 1 выполнен, вывод в консоль: 1, запрос 5 запускается, разрешится через 1200 мс (1900)
setTimeout(() => limitedJob(1000, 6), 800); // Запрос 6 ставится в очередь
setTimeout(() => limitedJob(800, 7), 1600); // Запрос 6 удаляется, запрос 7 ставится в очередь
setTimeout(() => limitedJob(600, 8), 1700); // Запрос 7 удаляется, запрос 8 ставится в очередь
// // Timer: 1900. Запрос 5 выполнен, вывод в консоль: 5, запрос 8 запускается, разрешится через 600 мс (2500)
setTimeout(() => limitedJob(100, 9), 2100); // Запрос 9 ставится в очередь
setTimeout(() => limitedJob(100, 10), 2200); // Запрос 9 удаляется, запрос 10 ставится в очередь
// // Timer: 2500. Запрос 8 выполнен, вывод в консоль: 8, запрос 10 запускается, разрешится через 100 мс (2600)
// // Timer: 2600. Запрос 10 выполнен, вывод в консоль: 10
