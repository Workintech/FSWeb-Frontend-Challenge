import React, { useContext} from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import { useTheme} from "../contexts/DarkModeContext";

import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import profilePic from "../assets/images/foto.jpg";
import emoji from "../assets/images/wavinghand.png";

export default function Hero (){
    const { translations, language } = useContext(LanguageContext);
    console.log("Translations:", translations);
    console.log("Language:", language);

    const {greeting, intro, social1, social2, social3} = translations;
    const { theme } = useTheme();

    return(
        <>
        <main className="px-10 py-1 md:px-60 md:pb-20 gap-4 md:gap-x-20 grid md:grid-cols-3 items-center ">
            <section className="md:col-span-2 md:pl-10">
                <h1 className="flex text-2xl mt-4 tracking-wider">{greeting} <img src={emoji} alt="" /></h1>
                <div className="relative">
                    <p className="md:leading-loose text-2xl md:text-4xl mt-4 mb-8 tracking-wide font-medium  relative z-10">
                        {intro}  
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-pink2 rounded-md absolute w-24 md:w-40 h-4 md:h-8 left-0 md:-left-5 bottom-[-2rem] top-4 md:top-10"></div>
                    </div> 
                </div>
                <div className={theme === "dark" ? "flex gap-4 mt-4 stroke-white" : "flex gap-4 mt-4"}>
                    <a href="" target="_blank">
                        <img src={linkedinLogo} className="logo linkedin" alt="Linkedin logo" />
                    </a>
                    <a href="" target="_blank">
                        <img src={githubLogo} className="logo github" alt="Github logo" />
                    </a>
                </div>
                <div className="py-4">
                    <p className="my-2" >{social1}</p>
                    <p>{social2} <a href="http://">{social3}</a></p> 
                </div>
            </section>
            <section className="items-start py-20 relative">
                <div className="relative">
                    <img className="w-full rounded-3xl shadow-2xl relative z-10" src={profilePic} alt="Profile" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-pink2 rounded-3xl absolute w-full h-full -left-5 -top-5"></div>
                    </div>
                </div>
            </section>        
        </main>
        
        </>
    )
}