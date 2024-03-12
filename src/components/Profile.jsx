import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react"

export default function Profile (){
    //Buradaki içerik state olarak gelecek
    const { translations } = useContext(LanguageContext);

    const { profileTitle, infoTitle, about, aboutInfo } = translations;
    //const info = translations.info

    return(
        <>
        <main className="px-10 py-10 md:px-60 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium  pb-10">{profileTitle}</h2>
            <div className="grid md:grid-cols-2">
                <section className="relative">
                    <div className="bg-white rounded-2xl px-4 py-6 relative z-10">
                        <h2 className="text-m text-pink2 font-medium py-4 z-10">{infoTitle}</h2>
                        <div className="grid grid-cols-2 gap-4 z-10">
                         <dt className="font-bold">a</dt> <dd>a</dd>
                            <dt className="font-bold">a</dt> <dd>a</dd>
                            <dt className="font-bold">a</dt> <dd>a</dd>
                            <dt className="font-bold">a</dt> <dd>a</dd>
                        </div> 
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <div className="bg-neutral-600 opacity-50 rounded-3xl absolute w-full h-full -right-2 -bottom-1 z-0"></div>
                    </div>
                </section>
                <section className="py-10 md:ml-20">
                    <div className="relative">
                        <h2 className="text-xl font-medium py-4 z-10 relative">{about}</h2>
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                            <div className="bg-blue2 rounded-md absolute w-18 md:w-24 h-4 left-0 md:-left-5 bottom-[-2rem] top-8"></div>
                        </div> 
                    </div>
                    
                    <p>{aboutInfo}</p>
                </section>
            </div> 
        </main>
        
        </>
    )
}