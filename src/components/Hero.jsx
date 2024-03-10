import { useState } from "react"

export default function Hero (){
    //Buradaki içerik state olarak gelecek
    return(
        <>
        <header >
            Buraya darkmode ve dil seçeneği gelecek
        </header>
        <main className="">
            <div className="">
                <h1 className="text-xl mt-4">Hi! </h1>
                <p className="text-4xl mt-4 mb-8">I’m İlsu. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!</p>
                
            </div>
            <div >
                <img className="rounded-2xl" src="https://picsum.photos/200/300?random=1"/>
            </div>
        </main>
        <footer>
            <a href="www.linkedin.com/in/ilsu-sunal">bla</a>
            <a href="">github</a>
            <p>Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your team - sunalilsu@gmail.com</p>
        </footer>
        
        </>
    )
}