import { TheRetro } from "./main/TheRetro";
import { RetroButton } from "./components/RetroButton/RetroButton";
import { RetroNavbar } from "./components/RetroNavbar/RetroNavbar";

function App() {
  return (
    <TheRetro>
      <RetroNavbar>
        <a href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
      </RetroNavbar>
      <RetroButton>Start game</RetroButton>
    </TheRetro>
  );
}

export default App
