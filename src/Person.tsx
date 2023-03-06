import { useState } from "react";

interface AgedPerson {
  name: string;
  age: number;
}

interface PersonProps {
  fetchAge: (name: string) => Promise<number>;
}

function Person({ fetchAge }: PersonProps) {
  const [name, setName] = useState("John Smith");
  const [persons, setPersons] = useState<AgedPerson[]>([]);

  // Здесь используется callback для установки состояния, чтобы быть уверенным, что используем последнее актуальное состояние
  const addPerson = (name: string, age: number) => {
    setPersons((prev) => prev.concat({ name, age }));
  };

  const addPersonRemote = async () => {
    const age = await fetchAge(name);
    addPerson(name, age);
  };

  const buttonsDisabled = name.length === 0;

  return (
    <>
      <div style={{ padding: "20px" }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div style={{ padding: "20px" }}>
        <button
          style={{ padding: "5px", marginRight: "20px" }}
          onClick={addPersonRemote}
          disabled={buttonsDisabled}
        >
          {"Fetch age"}
        </button>

        <button
          style={{ padding: "5px" }}
          // Здесь заменил на функцию обработчик
          onClick={() => addPerson(name, name.length)}
          disabled={buttonsDisabled}
        >
          {"Set age"}
        </button>
      </div>

      <table style={{ padding: "20px" }}>
        <tbody>
          {persons.map(({ name, age }, idx) => (
            <tr key={idx}>
              <td>{name}:</td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Person;
