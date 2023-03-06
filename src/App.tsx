import React from "react";
import "./App.css";
import Person from "./Person";

function App() {
  // функция запроса возраста с сервера
  function fetchAge(name: string): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name.length);
      }, 2000);
    });
  }

  return (
    <div className="App">
      <Person fetchAge={fetchAge} />
    </div>
  );
}

export default App;
