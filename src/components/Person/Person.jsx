import "./Person.css";

const Person = (props) => {
  return (
    <div className="person">
      <h3 className="title">{props.name}</h3>
      <p className="age">
        Age: <span>{props.age}</span>
      </p>
      <p className="prof">
        Профессия: <b>{props.children}</b>
      </p>
    </div>
  );
};

export default Person;
