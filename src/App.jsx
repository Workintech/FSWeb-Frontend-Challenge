import { useState } from 'react'
import Hero from "./components/Hero";
import './App.css'
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';
import Ornaments from './components/Ornaments';

function App() {

  return (
    <>
    <main>
      <Ornaments />
      <section  className="bg-zinc-100 ">
        <Header />
        <Hero/>
      </section>
      <div className="">
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
    </>
  )
}

export default App
