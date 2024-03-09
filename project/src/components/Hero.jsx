import { useState } from "react"

export default function Hero (){
    const [darkMode, setDarkMode] = useState([]);
    const [lang, setLang] = useState([]);

    return(
        <>
        <header >
            Buraya darkmode ve dil seçeneği gelecek
        </header>
        <main className="flex place-content-around mt-8">
            <div className="flex flex-col items-start max-w-[600px]">
                <h1>Hi! + emoji</h1>
                <p className="text-4xl mt-4 mb-8">I’m İlsu. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!</p>
                <a href="www.linkedin.com/in/ilsu-sunal">bla</a>
                <a href="">github</a>
                <p>Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your team - sunalilsu@gmail.com</p>
            </div>
            <div className="bg-white rounded-2xl p-2 m-6 max-w-[361px]">
                Buraya foto gelecek
            </div>
        </main>
        
        </>
    )
}