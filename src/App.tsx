import { useState } from "react";
import Alert from "./Components/Alert";
import { Button } from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Message from "./Message";

function App() {
  let items = ["New York", "New Jersey", "Newcastle", "Bellambi", "Sydney"];
  const handleSelectItem = (item: string) => console.log(item);

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    console.log("clicked");
    setShowAlert(true);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />

      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <span>My Alert</span>
        </Alert>
      )}

      <Button onClick={handleShowAlert}>My Button</Button>
    </div>
  );
}

export default App;
