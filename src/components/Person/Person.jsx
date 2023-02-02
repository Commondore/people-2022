import "./Person.css";

const Person = (props) => {
  return (
    <div className="person">
      <h3 className="title" onClick={props.increase}>
        {props.name}
      </h3>
      <input type="text" className="change__name" value={props.name} onChange={props.change} />
      <p className="age">
        Age: <span>{props.age}</span>
      </p>
      <p className="prof" onClick={props.remove}>
        Профессия: <b>{props.children}</b>
      </p>
    </div>
  );
};

export default Person;
