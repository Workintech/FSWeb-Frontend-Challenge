import computerImage from "../assets/images/computer.png"
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react"
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Projects (){
    const { translations } = useContext(LanguageContext);
    const { darkMode } = useDarkMode();

    const { projectsTitle, projects } = translations;

    return(
        <>
        <main className="px-10 py-10 md:px-60 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium pb-10">{projectsTitle}</h2>
            <div className=" grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
                <section key={index} className={`rounded-2xl w-full px-6 py-8 relative ${index % 2 === 0 ? (darkMode ? "bg-koyuyesil" : "bg-bluecard") : (darkMode ? "bg-solukyesil" : "bg-greencard")}`}>
                    <div className="">
                        <h2 className="text-3xl font-medium py-4 font-playfair tracking-wide">{project.title}</h2>
                        <p className="">{project.description}</p>
                        <div className="flex flex-wrap gap-2 py-4 mt-6 text-xl font-playfair tracking-wide">
                            {project.tags.map((tag, tagIndex) => (
                                <p key={tagIndex} className={darkMode ? "bg-neutral-500 rounded-3xl py-1 px-6 " : "bg-white rounded-3xl py-1 px-6 "}>{tag}</p>
                                ))}
                        </div>
                        <div className="flex justify-between text-xl font-medium py-4 mb-40 md:mb-60">
                            <a href={project.githubLink}>{project.github}</a>
                            <a href={project.appLink}>{project.app}</a>
                        </div>  
                    </div>
                    <img src={project.img} className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-1/4 mt-6" alt="" />
                    <img src={computerImage} className="absolute bottom-0 scale-105 left-1/2 transform -translate-x-1/2 translate-y-1/4 mt-6" alt="" />
                    
                </section>
            ))}
            </div>
            
        </main>
            
        </>
    )
}