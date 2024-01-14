import "./App.css";
import BannerSection from "./components/BannerSection";
import GallerySlider from "./components/GallerySlider";
import Header from "./components/Header";
import QuantitySection from "./components/QuantitySection";
import { mainSliderItems } from "./constants/BannerSectionItems";
import { clientData } from "./constants/BannerSectionItems";
function App() {
  return (
    <>
      <Header />
      <BannerSection items={mainSliderItems} />
      <QuantitySection />
      <GallerySlider clients={clientData} />
    </>
  );
}

export default App;
