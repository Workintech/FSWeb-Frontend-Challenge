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
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <header  className="bg-slate-200">
        <Hero/>
      </header>
      <main>
        <Skills/>
        <Profile/>
        <Projects/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
