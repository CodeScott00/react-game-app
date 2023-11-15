import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";
import { useState } from "react";
import produce from "immer";

function App() {
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  //const [person, setPerson] = useState(["happy ", "cheerful"]);

  const [bug, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => (bug.id = 2));
        if (bug) bug.fixed = true;
      })
    );
    // add //setPerson([...person, " excited"]); //we dont want to modify state directly so we make a copy of the object or array and edit that
    // remove - setPerson(person.filter((peep) => peep !== "happy "));
    // update setPerson(person.map((peep) => (peep === "happy " ? "happiness " : peep)));
  };

  return (
    <>
      <div>
        {bug.map((bug) => (
          <p key={bug.id}>
            {bug.title} {bug.fixed ? "Fixed" : "Not fixed"}
          </p>
        ))}
      </div>
      <Like onClick={handleClick} />
    </>
  );
}

export default App;
