import { LanguageContext } from "../contexts/LanguageContext"
import React, { useContext } from "react"

export default function Footer (){
    const { translations } = useContext(LanguageContext);
    const { goodbye} = translations;

    return(
        <>
        <main className="relative px-10 py-10 md:px-60 md:py-20  md:grid md:grid-cols-3 gap-6">
            <p className="relative col-span-2 text-3xl md:text-4xl mt-4 md:mb-8 tracking-wide md:leading-normal font-medium md:pl-20 text-right pr-10 z-10">
                {goodbye}</p>
            <div className="absolute inset-0 flex z-0">
                <div className="bg-blue2 rounded-md absolute w-18 md:w-48 h-4 right-0 md:right-1/2 top-1/2 md:top-32"></div>
            </div> 
            <div className="flex justify-around  mt-6 md:flex-col md:justify-center font-medium text-xl ">
                <a className="text-sky-600 hover:underline hover:cursor-pointer" href="/">Github</a>
                <a className="text-black hover:underline" href="/">Blog</a>
                <a className="text-cyan-800 hover:underline" href="/">Linkedin</a>
                <a className="text-pink2 hover:underline" href="/">Email</a>
            </div> 
        </main>
        
        </>
    )
}