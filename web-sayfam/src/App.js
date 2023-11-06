import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useContext } from "react";
import { SiteContext } from "./contexts/SiteContext";
const initialDAta = {
  name: "Almila Su",
  birthday: "24.03.1996",
  cityofresidence: "Ankara",
  education: "Hacettepe Ünv. Biyoloji Lisans,2016",
  preference: "Frontend, UI",
  mail: "almilasucode@gmail.com",
};
function App() {
  const [profildata, setProfildata] = useState(initialDAta);
  const { theme } = useContext(SiteContext);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      <div className={theme === "LIGHT" ? "dark-mode" : ""}>
        <ModeSwitch />
        <Header />
        <Hero profildata={profildata} />
        <Skills />
        <Profile profildata={profildata} />
        <Projects />
        <Footer profildata={profildata} />
      </div>
    </>
  );
}

export default App;
