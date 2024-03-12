import React, { useContext, useState } from "react"
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
import profilePic from "../assets/images/foto.jpg"
import { LanguageContext } from "../contexts/LanguageContext"

export default function Hero (){
    const { translations, language } = useContext(LanguageContext);
    console.log("Translations:", translations);
    console.log("Language:", language);

    const greeting = translations.greeting;
    const intro = translations.intro;
    const social1 = translations.social1;
    const social2 = translations.social2;

    return(
        <>
        <main className="px-10 py-1 md:px-60 md:pb-20 gap-4 md:gap-x-20 grid md:grid-cols-3 items-center ">
            <section className="md:col-span-2  ">
                <h1 className="text-xl mt-4 tracking-wider">{greeting}</h1>
                <div className="relative">
                    <p className="text-3xl md:text-4xl mt-4 mb-8 tracking-wide font-medium leading-loose relative z-10">
                        {intro}  
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-pink2 rounded-md absolute w-24 md:w-32 h-8 left-0 md:-left-5 bottom-[-2rem] top-5"></div>
                    </div> 
                </div>
                 
                <div className="flex gap-4 mt-4">
                    <a href="" target="_blank">
                        <img src={linkedinLogo} className="logo linkedin" alt="Linkedin logo" />
                    </a>
                    <a href="" target="_blank">
                        <img src={githubLogo} className="logo github" alt="Github logo" />
                    </a>
                </div>
                <div className="py-4">
                    <p className="my-2" >{social1}</p>
                    <p>{social2}</p> 
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