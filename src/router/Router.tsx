import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import UnitConverter from "../page/projects/UnitConverter";
import About from "../page/About";
import CoffeeShopMenu from "../page/projects/CoffeeShopMenu";
import GuessingGame from "../page/projects/GuessingGame";
import Linktree from "../page/projects/Linktree";
import Gallery from "../page/projects/Gallery";
import DigitalBusinessCard from "../page/projects/DigitalBusinessCard";
import TriviaGame from "../page/projects/TriviaGame";
import RickAndMorty from "../page/projects/RickAndMorty";
import CaesarCipher from "../page/projects/CaesarCipher";
import TypewriterPortfolio from "../page/projects/TypewriterPortfolio";
import ComedianBot from "../page/projects/ComedianBot";
import PixelPaws from "../page/projects/PixelPaws";
import Pokedex from "../page/projects/Pokedex";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/1" element={<Linktree />} />
        <Route path="/projects/2" element={<UnitConverter />} />
        <Route path="/projects/3" element={<CoffeeShopMenu />} />
        <Route path="/projects/4" element={<GuessingGame />} />
        <Route path="/projects/5" element={<Gallery />} />
        <Route path="/projects/6" element={<DigitalBusinessCard />} />
        <Route path="/projects/7" element={<TriviaGame />} />
        <Route path="/projects/8" element={<RickAndMorty />} />
        <Route path="/projects/9" element={<CaesarCipher />} />
        <Route path="/projects/10" element={<TypewriterPortfolio />} />
        <Route path="/projects/11" element={<ComedianBot />} />
        <Route path="/projects/12" element={<PixelPaws />} />
        <Route path="/projects/13" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}
