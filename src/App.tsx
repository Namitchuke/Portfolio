import "./App.css";
import { AnimatedGridMainBackground } from "./components/animated-ui/AnimatedGridMainBackground";
import { MobileColumn } from "./components/MobileColumn";
import { VentoGrid } from "./components/VentoGrid";
import { SectionContextProvider } from "./context/SectionContextProvider";

function App() {
  return (
    <SectionContextProvider>
      <AnimatedGridMainBackground>
        <VentoGrid />
        <MobileColumn />
      </AnimatedGridMainBackground>
    </SectionContextProvider>
  );
}

export default App;
