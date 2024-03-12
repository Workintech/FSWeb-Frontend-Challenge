import { useState } from 'react'
import Hero from "./components/Hero";
import './App.css'
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';

import greyDonut from "./assets/shapes/greydonut.png"
import pinkRec from "./assets/shapes/pinkrec.png"
import greyRec from "./assets/shapes/greyrec.png"
import pinkDonut from "./assets/shapes/pinkdonut.png"
import useLocalStorage from './hooks/useLocalStorage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  
  const [darkMode, setDarkMode] = useLocalStorage('s12', true);

  return (
    <LanguageProvider>
    <main className='dark:bg-blue-950'>
      <section  className="bg-zinc-100 relative ">
        <img className="absolute right-0 top-2/3 md:top-3/4" src={pinkRec} alt="" />
        <img className="absolute left-4 md:left-2/3 -bottom-16" src={greyDonut} alt="" />
        <Header />
        <Hero/>
      </section>
      <div className="relative">
        <img className="absolute top-full md:top-3/4" src={greyRec} alt="" />
        <img className="absolute right-0 -bottom-44 md:-bottom-24" src={pinkDonut} alt="" />
        <Skills/>
      </div>
      <div  className="bg-zinc-100 ">
        <Profile/>
      </div>
      <div>
        <Projects/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </main>
    </LanguageProvider>
  )
}

export default App
