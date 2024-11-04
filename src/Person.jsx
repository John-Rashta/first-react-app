import { useState } from 'react';

function Person() {
    const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });
  
    const handleIncreaseAge = () => {
      setPerson({ ...person, age: person.age + 1 });
    };

    const handlePerson = (event, type) => {
        setPerson({...person, [type]: event.target.value});
    }
  
    return (
      <>
        <h1>{person.firstName} {person.lastName}</h1>
        <h2>{person.age}</h2>
        <CustomInput type="firstName" key="firstName" onType={handlePerson} value={person.firstName} />
        <CustomInput type="lastName" key="lastName" onType={handlePerson} value={person.lastName} />
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  function CustomInput({type, onType, value}) {
    
    return (
        <input
        type="text"
        value={value}
        onChange={(e) => onType(e, type)}
        />
    );
};


  export {Person};

