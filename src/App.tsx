import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";
import { useState } from "react";
import produce from "immer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Form />
      {/* <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis
        incidunt exercitationem earum numquam? Dolore, placeat sapiente
        accusamus quos ab, ipsa quo nisi quas assumenda, dolor repudiandae odit
        consequuntur? Sed rem corporis quasi dolorem voluptatibus dolore, minus
        hic, dolor, facilis labore natus! Magnam consequatur quia sit facilis
        culpa ducimus dolores odit beatae, voluptas laudantium voluptate
        accusamus possimus suscipit voluptatum nesciunt. In aperiam repudiandae
        odit ipsa iure ad dolores dolorum delectus provident, numquam vero
        officiis natus totam architecto veritatis laudantium necessitatibus
        commodi quaerat? Nam corrupti ipsum id, non atque soluta repellat
        repellendus dolor aliquid, quam nesciunt ducimus consequatur, adipisci
        quaerat possimus.
      </ExpandableText> */}
    </>
  );
}

export default App;
