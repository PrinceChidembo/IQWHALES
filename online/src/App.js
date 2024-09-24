import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import VisionMission from "./components/VisionMission";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <VisionMission />
      <Footer />
    </div>
  );
}

export default App;
