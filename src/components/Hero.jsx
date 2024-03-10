import { useState } from "react"
import linkedinLogo from "../assets/linkedin.svg"
import githubLogo from "../assets/github.svg"
import profilePic from "../assets/foto.jpg"

export default function Hero (){
    //Buradaki içerik state olarak gelecek
    return(
        <>
        <header className="px-10 py-1 md:px-40 md:py-5">
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="relative w-11 h-6 rounded-full peer dark:bg-pink-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow2  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-pink2"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">DARK MODE</span>
            </label>
        </header>
        <main className="px-10 py-1 md:px-40 md:py-5">
            <section className="grid gap-4 md:grid-cols-3 md:gap-x-20">
                <div className="md:col-span-2 ">
                    <h1 className="text-xl mt-4 tracking-wider">Hi! </h1>
                    <p className="text-3xl md:text-4xl mt-4 mb-8 tracking-wide leading-normal font-medium">I’m İlsu. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!</p>    
                </div>
                <div className=" ">
                    <img className="w-full rounded-2xl " src={profilePic}/>
                </div>
            </section>
            <footer className="py-2">
                <div className="mt-2">
                    <a href="https://tr.linkedin.com/in/ilsu-sunal" target="_blank">
                        <img src={linkedinLogo} className="logo linkedin" alt="Linkedin logo" />
                    </a>
                    <a href="https://github.com/ilsusunal" target="_blank">
                        <img src={githubLogo} className="logo github" alt="Github logo" />
                    </a>
                </div>
                <p className="my-2" >Currently Freelancing for UX, UI, & Web Design Project.</p>
                <p>Invite me to join your team - <a href="http://sunalilsu@gmail.com">sunalilsu@gmail.com</a></p>
            </footer>
        </main>
        
        </>
    )
}