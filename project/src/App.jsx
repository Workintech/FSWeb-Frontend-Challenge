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
      <header  className="bg-slate-200 flex">
        <Hero/>
      </header>
      <div>
        <Skills/>
      </div>
      <div  className="bg-slate-200">
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
