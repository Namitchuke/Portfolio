import "./App.css";
import { MotionConfig } from "framer-motion";
import { AnimatedGridMainBackground } from "./components/animated-ui/AnimatedGridMainBackground";
import { MobileColumn } from "./components/MobileColumn";
import { VentoGrid } from "./components/VentoGrid";
import { SectionContextProvider } from "./context/SectionContextProvider";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SectionContextProvider>
        <AnimatedGridMainBackground>
          <VentoGrid />
          <MobileColumn />
        </AnimatedGridMainBackground>
      </SectionContextProvider>
    </MotionConfig>
  );
}

export default App;
