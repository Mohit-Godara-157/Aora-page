import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Maps from "./Components/Maps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Maps2 from "./Components/Maps2";
import PasSlider from "./Components/PasSlider";
import HeroSection from "./Components/HeroSection";
import Herosection2 from "./Components/Herosection2";

function App() {
  return (
    <>
      <div className=" overflow-x-hidden">
        <HeroSection />
        <div className="flex md:flex-col flex-col-reverse ">
          <Maps />
          <PasSlider />
        </div>
        <Herosection2 />
        <Maps2 />
      </div>
    </>
  );
}

export default App;
