import { TheRetro } from "./main/TheRetro";
import { RetroButton } from "./components/RetroButton/RetroButton";
import { RetroNavbar } from "./components/RetroNavbar/RetroNavbar";
import { RetroCard } from "./components/RetroCard/RetroCard";
import { HeroSection } from "./components/Sections/Hero";

function App() {
  return (
    <TheRetro>
      <RetroNavbar>
        <a href="hero">Home</a>
        <a href="#">Skills</a>
        <a href="#">Project</a>
        <a href="#">Contact</a>
      </RetroNavbar>
      <HeroSection/>
      <RetroCard>
        <img src="https://st2.depositphotos.com/2927537/7026/i/950/depositphotos_70260001-stock-photo-funny-monkey-with-a-red.jpg" alt="monkey" />
        <div className="retro-card-title">monkey</div>
        <div className="retro-card-content">whatsjkdhawj gdkjawhdjawhdjkghawdkjbajhdbawjnh</div>
        <div className="retro-card-actions">
          <RetroButton>click meeee</RetroButton>
        </div>
      </RetroCard>
    </TheRetro>
    
  );
}

export default App
