import Person from "components/Person/Person";
import "./App.css";

import { useState } from "react";
import AddPersonForm from "components/AddPersonForm/AddPersonForm";

function App() {
  const [people, setPeople] = useState([
    { name: "Mike", age: 30, prof: "Программист", id: 1 },
    { name: "Sam", age: 20, prof: "UI/UX Designer", id: 2 },
    { name: "John", age: 40, prof: "Тунеядец", id: 3 },
  ]);
  // const [input, setInput] = useState("");
  const [title, setTitle] = useState("Hello React");
  const [show, setShow] = useState(true);

  const changeName = (id, event) => {
    setPeople(() => {
      return people.map((person) => {
        // [{}, {}]
        if (person.id === id) {
          person.name = event.target.value;
        }
        return person;
      });
    });
  };

  const changeTitle = () => {
    setTitle("New title");
  };

  const increaseAge = (id) => {
    const index = people.findIndex((person) => person.id === id);
    const person = { ...people[index] };
    person.age++;
    const copyPeople = [...people];
    copyPeople[index] = person;

    setPeople(copyPeople);
  };

  const togglePeople = () => {
    setShow((show) => !show);
  };

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  const addPerson = (person, event) => {
    event.preventDefault();

    setPeople((people) => {
      return [...people, { ...person }];
    });
  };

  // const changeHandler = (event) => setInput(event.target.value)

  let list = null;

  if (show) {
    list = (
      <div className="people">
        {people.map((person) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              increase={() => increaseAge(person.id)}
              change={(event) => changeName(person.id, event)}
              remove={() => removePerson(person.id)}
            >
              {person.prof}
            </Person>
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1 onClick={changeTitle}>{title}</h1>
      <AddPersonForm add={addPerson} />
      <button className="btn" onClick={togglePeople}>
        Toggle people
      </button>
      {/* <input type="text" value={input} onChange={changeHandler} /> */}
      {list}
    </div>
  );
}

export default App;
