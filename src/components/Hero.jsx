import React,  { useContext} from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import { useTheme} from "../contexts/DarkModeContext";

import githubbeyaz from "../assets/social/githubbeyaz.png"
import githubsiyah from "../assets/social/githubsiyah.png"
import linkedinsiyah from "../assets/social/linkedinsiyah.png"
import linkedinbeyaz from "../assets/social/linkedinbeyaz.png"
import profilePic from "../assets/images/foto.jpg";
import emoji from "../assets/images/wavinghand.png";
import usePinkify from "../hooks/usePinkify";

export default function Hero (){
    const { translations, language } = useContext(LanguageContext);
    console.log("Translations:", translations);
    console.log("Language:", language);

    const {greeting, intro, social1, social2, social3} = translations;
    const { theme } = useTheme();

    const pinkifiedSocial1Indices = language === 'en' ? [1, 3, 4, 5, 6, 7] : [2, 4, 5, 7, 8];
    const pinkifiedSocial1 = usePinkify(social1, pinkifiedSocial1Indices);
    

    return(
        <>
        <main className="px-10 py-1 md:px-20 lg:px-60 md:pb-20 gap-4 md:gap-x-20 grid lg:grid-cols-3 items-center ">
            <section className="lg:col-span-2 md:pl-10">
                <h1 className="flex text-2xl mt-4 tracking-wider">{greeting} <img src={emoji} alt="" /></h1>
                <div className="relative">
                    <p className="md:leading-loose text-2xl md:text-4xl mt-4 mb-8 tracking-wide font-medium  relative z-10">
                        {intro}  
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-pink2 rounded-md absolute w-24 md:w-40 h-4 md:h-8 left-0 md:-left-5 bottom-[-2rem] top-4 md:top-10"></div>
                    </div> 
                </div>
                <div className=" flex gap-4 mt-4">
                    <a href="/">{theme === "dark" ? <img src={linkedinbeyaz} alt="" /> : <img src={linkedinsiyah} alt="" />}</a>
                    <a href="/">{theme === "dark" ? <img src={githubbeyaz} alt="" /> : <img src={githubsiyah} alt="" />}</a>
                </div>
                <div className="py-4 tracking-wide">
                    <p className="my-2">
                        {pinkifiedSocial1}
                    </p>
                    <p className="my-2">
                        {social1.includes("freelance") && ( <>Şu an <span className="text-pink2">Freelance</span> olarak{" "}<span className="text-pink2">UX, UI ve Web Tasarımı</span> yapıyorum.</>)}
                    </p>
                    <p>{social2} <a className="underline text-pink2 tracking-wider" href="http://">{social3}</a></p> 
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