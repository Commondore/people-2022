import Person from "components/Person/Person";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>People list</h1>
      <div className="people">
        <Person name="Sam" age="25" />
        <Person name="Mike" age="35" />
      </div>
    </div>
  );
}

export default App;
