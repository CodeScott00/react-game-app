import { Button } from "./Components/Button/Button";
import { Like } from "./Components/Like";

function App() {
  return (
    <>
      <Like onClick={() => console.log("clicked")} />
    </>
  );
}

export default App;
