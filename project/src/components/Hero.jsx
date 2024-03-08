import { useState } from "react"

export default function Hero (){
    const [darkMode, setDarkMode] = useState([]);
    const [lang, setLang] = useState([]);

    return(
        <>
        <header>
            Buraya darkmode ve dil seçeneği gelecek
        </header>
        <div>
            <h1>Hi! + emoji</h1>
            <p>I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!</p>
            <footer>
                in + logo <br />
                Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your team - pratamaiosi@gmail.com
            </footer>
        </div>
        <div>
            Buraya foto gelecek
        </div>
        </>
    )
}