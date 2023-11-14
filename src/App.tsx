import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";
import { useState } from "react";

function App() {
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "Scott",
    address: {
      city: "Beach",
      postcode: 2000,
    },
  });

  const handleClick = () => {
    setPerson({
      ...person,
      address: { ...person.address, postcode: 2001 },
    });
  };

  return (
    <>
      <div>{person.address.postcode}</div>
      <Like onClick={handleClick} />
    </>
  );
}

export default App;
