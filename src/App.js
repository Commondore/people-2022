import "./App.css";

import { useState } from "react";
import AddPersonForm from "components/AddPersonForm/AddPersonForm";
import People from "components/People/People";
import ToggleButton from "components/ToggleButton/ToggleButton";
import Counter from "components/Counter/Counter";
import Example from "components/Example/Example";

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

  return (
    <div className="App">
      <h1 onClick={changeTitle}>{title}</h1>
      <Example />
      <AddPersonForm add={addPerson} />
      <ToggleButton show={show} toggle={togglePeople}>
        Toggle
      </ToggleButton>

      <Counter data={people}>Количество людей:</Counter>

      {show && (
        <People
          people={people}
          change={changeName}
          increase={increaseAge}
          remove={removePerson}
        />
      )}
    </div>
  );
}

export default App;
