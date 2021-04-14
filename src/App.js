import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/sections/ProjectSection";
import AboutMeSection from "./components/sections/AboutMeSection";
import Footer from "./components/Footer";
import WindowSizeProvider from "./context/WindowSizeProvider";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <WindowSizeProvider>
      <div className="App">
        <NavBar />
        <main>
          <HeroSection />
          <AboutMeSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </WindowSizeProvider>
  );
}

export default App;
