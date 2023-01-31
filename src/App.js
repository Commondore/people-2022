import Person from "components/Person/Person";
import "./App.css";

import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    { name: "Mike", age: 30, prof: "Программист" },
    { name: "Sam", age: 20, prof: "UI/UX Designer" },
  ]);

  const [title, setTitle] = useState("Hello React");

  const changeName = () => {
    // const person = { ...people[0] };
    // person.name = "Ketty";
    // const copyPeople = [...people];
    // copyPeople[0] = person;

    // setPeople(copyPeople);

    setPeople(() => {
      return people.map((person, index) => {
        if (index === 1) {
          person.name = "Ketty";
        }
        return person;
      });
    });
  };

  const changeTitle = () => {
    setTitle("New title");
  };

  const increaseAge = () => {
    const copy = people.map((person) => {
      //{ name: "Mike", age: 30, prof: "Программист" }
      return {
        ...person,
        age: person.age + 1,
      };
    });
    setPeople(copy);
  };

  return (
    <div className="App">
      <h1 onClick={changeTitle}>{title}</h1>
      <button className="btn" onClick={changeName}>
        Change Name
      </button>
      <button className="btn" onClick={increaseAge}>
        Увеличить возраст
      </button>
      <div className="people">
        <Person name={people[0].name} age={people[0].age}>
          {people[0].prof}
        </Person>
        <Person name={people[1].name} age={people[1].age}>
          {people[1].prof}
        </Person>
      </div>
    </div>
  );
}

export default App;
