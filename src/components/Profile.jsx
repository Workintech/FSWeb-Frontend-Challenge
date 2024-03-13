import { useTheme } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext"
import React, { useContext } from "react"

export default function Profile (){
    const { translations } = useContext(LanguageContext);
    const { theme } = useTheme();

    const { profileTitle, infoTitle, about, aboutInfo, info } = translations;

    return(
        <>
        <main className="px-10 py-10 md:px-60 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium  pb-10">{profileTitle}</h2>
            <div className="grid md:grid-cols-2">
                <section className="relative">
                    <div className={theme === "dark" ? "bg-neutral-600 rounded-2xl p-6 relative z-10 " :"bg-white rounded-2xl p-6 relative z-10"}>
                        <h2 className="text-xl text-pink2 font-medium my-6 z-10 font-playfair tracking-wide">{infoTitle}</h2>
                        <div className="grid grid-cols-2 gap-4 z-10">
                            {Object.keys(info).map((key) => (
                                <React.Fragment key={key}>
                                    <dt className="font-bold">{key}</dt>
                                    <dd>{info[key]}</dd>
                                </React.Fragment>
                            ))}
                        </div> 
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <div className="bg-neutral-600 opacity-50 rounded-3xl absolute w-full h-full -right-2 -bottom-1 z-0"></div>
                    </div>
                </section>
                <section className="py-10 md:ml-20">
                    <div className="relative">
                        <h2 className="text-xl font-medium py-8 z-10 relative font-playfair tracking-wide">{about}</h2>
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                            <div className="bg-blue2 rounded-md absolute w-18 md:w-24 h-4 left-0 top-0 md:-left-8 md:bottom-[-2rem] md:top-12"></div>
                        </div> 
                    </div>                   
                    <p>{aboutInfo}</p>
                </section>
            </div> 
        </main>
        
        </>
    )
}