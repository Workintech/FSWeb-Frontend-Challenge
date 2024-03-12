import jsLogo from "../assets/icons/jslogo.jpg"
import reactLogo from "../assets/icons/reactlogo.jpg"
import reduxLogo from "../assets/icons/reduxlogo.jpg"
import nodeLogo from "../assets/icons/nodelogo.jpg"
import vscodeLogo from "../assets/icons/vscodelogo.jpg"
import figmaLogo from "../assets/icons/figmalogo.jpg"
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react"

export default function Skills (){
    //Buradaki içerik maple yazılacak
    const skillsData = [
        { logo: jsLogo, name: "JAVASCRIPT" },
        { logo: reactLogo, name: "REACT" },
        { logo: reduxLogo, name: "REDUX" },
        { logo: nodeLogo, name: "NODE" },
        { logo: vscodeLogo, name: "VS CODE" },
        { logo: figmaLogo, name: "FIGMA" }
    ];
    const { translations } = useContext(LanguageContext);

    const skillsTitle = translations.skillsTitle;

    return(
        <>
        <main className="px-10 py-10 md:px-60 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium  ">{skillsTitle}</h2>
            <div className="pt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex gap-4 md:gap-10">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img className="rounded-xl" src={skill.logo} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </main>
        
        </>
    )
}