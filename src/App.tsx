import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";
import { useState } from "react";
import produce from "immer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";

function App() {
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  //const [person, setPerson] = useState(["happy ", "cheerful"]);

  const [cartItems, setCartItems] = useState(["produce1", "produce2"]);

  const handleClick = () => {};

  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} handleClear={() => setCartItems([])} />

      {/* <Like onClick={handleClick} /> */}
    </>
  );
}

export default App;
