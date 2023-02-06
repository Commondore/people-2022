import Person from "components/Person/Person";

const People = (props) => {
  const { people, increase, change, remove } = props;
  return (
    <div className="people">
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            increase={() => increase(person.id)}
            change={(event) => change(person.id, event)}
            remove={() => remove(person.id)}
          >
            {person.prof}
          </Person>
        );
      })}
    </div>
  );
};

export default People;
