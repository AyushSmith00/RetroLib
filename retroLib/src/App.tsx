import { Button } from "./components/Button/Button";
import {Choosebackground } from "./components/Button/Choosebackground";

function App() {
  return (
    <div>
      <Button onClick={() => alert("the button has been clicked boy")}>Click Me</Button>
      <Choosebackground>Change The Background</Choosebackground>

    </div>
  );
}

export default App
