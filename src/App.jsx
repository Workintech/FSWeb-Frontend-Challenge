import './App.css';
import { useDarkMode } from './contexts/DarkModeContext';

import Hero from "./components/Hero";
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';


import greyDonut from "./assets/shapes/greydonut.png"
import pinkRec from "./assets/shapes/pinkrec.png"
import greyRec from "./assets/shapes/greyrec.png"
import pinkDonut from "./assets/shapes/pinkdonut.png"
import greyCircle from "./assets/shapes/greycircle.png"


function App() {
  const { darkMode } = useDarkMode();

  return (
        <main className={darkMode ? "bg-acikkahve text-white" :"bg-white relative "}>
          <section  className={darkMode ? "bg-koyukahve" :"bg-zinc-100 relative "}>
            <img className="absolute -left-4 md:left-1/4 z-0 " src={greyCircle} alt="" />
            <img className="absolute right-0 top-2/4 md:top-3/4" src={pinkRec} alt="" />
            <img className="absolute left-4 md:left-2/3 -bottom-16" src={greyDonut} alt="" />
            <Header />
            <Hero/>
          </section>
          <div className="relative">
            <img className="absolute top-full md:top-3/4" src={greyRec} alt="" />
            <img className="absolute right-0 -bottom-44 md:-bottom-24" src={pinkDonut} alt="" />
            <Skills/>
          </div>
          <div  className={darkMode ? "bg-koyukahve" :"bg-zinc-100"}>
            <Profile/>
          </div>
          <div>
            <Projects/>
          </div>
          <footer>
            <Footer/>
          </footer>
        </main>
  )
}

export default App
