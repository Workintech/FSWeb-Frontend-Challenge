import { useState } from 'react'
import Hero from "./components/Hero";
import './App.css'
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <header  className="bg-slate-200 max-h-[738px] max-w-[1440px]">
        <Hero/>
      </header>
      <div className="flex">
        <Skills/>
      </div>
      <div  className="bg-slate-200 flex">
        <Profile/>
      </div>
      <div>
        <Projects/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
