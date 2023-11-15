import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";
import { useState } from "react";

function App() {
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState(["happy ", "cheerful"]);

  const handleClick = () => {
    // add //setPerson([...person, " excited"]); //we dont want to modify state directly so we make a copy of the object or array and edit that
    // remove - setPerson(person.filter((peep) => peep !== "happy "));
    // update setPerson(person.map((peep) => (peep === "happy " ? "happiness " : peep)));
  };

  return (
    <>
      <div>{person}</div>
      <Like onClick={handleClick} />
    </>
  );
}

export default App;
