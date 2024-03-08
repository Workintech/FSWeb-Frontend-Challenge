import { useState } from 'react'
import Hero from "./components/Hero";
import './App.css'
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
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
