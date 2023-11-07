import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./components/modeswitch.css";
import "./components/header.css";
import "./components/hero.css";
import "./components/skills.css";
import "./components/profile.css";
import "./components/project.css";
import "./components/footer.css";
import { SiteContextProvider } from "./contexts/SiteContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SiteContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SiteContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
