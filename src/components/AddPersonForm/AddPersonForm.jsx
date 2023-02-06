import { useState } from "react";
import "./AddPersonForm.css";

const AddPersonForm = (props) => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    prof: "",
  });

  const changeHandler = (event) => {
    setInfo((info) => {
      return {
        id: Date.now(),
        ...info,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    props.add(info, event);

    setInfo({
      name: "",
      age: "",
      prof: "",
    });
  };

  return (
    <div className="add-person">
      <form onSubmit={onSubmitHandler}>
        <div className="group">
          <input
            type="text"
            name="name"
            value={info.name}
            className="change__name"
            placeholder="Enter name"
            onChange={changeHandler}
          />
        </div>
        <div className="group">
          <input
            type="text"
            name="age"
            value={info.age}
            className="change__name"
            placeholder="Enter age"
            onChange={changeHandler}
          />
        </div>
        <div className="group">
          <input
            type="text"
            name="prof"
            value={info.prof}
            className="change__name"
            placeholder="Enter proffession"
            onChange={changeHandler}
          />
        </div>

        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default AddPersonForm;
