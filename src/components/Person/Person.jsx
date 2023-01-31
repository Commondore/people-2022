import "./Person.css";
// import ProfileImg from './profile.png';

const Person = function (props) {
  // const {name, age} = props;
  return (
    <div className="person">
      <h3 className="title">{props.name}</h3>
      <p className="age">Age: {props.age}</p>
    </div>
  );
};

export default Person;
