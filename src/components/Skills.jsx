import jsLogo from "../assets/icons/jslogo.jpg"
import reactLogo from "../assets/icons/reactlogo.jpg"
import reduxLogo from "../assets/icons/reduxlogo.jpg"
import nodeLogo from "../assets/icons/nodelogo.jpg"
import vscodeLogo from "../assets/icons/vscodelogo.jpg"
import figmaLogo from "../assets/icons/figmalogo.jpg"

export default function Skills (){
    //Buradaki içerik maple yazılacak
    return(
        <>
        <main className="px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium  ">Skills</h2>
            <div className="pt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex gap-4 md:gap-10">
                <p><img className="rounded-xl" src={jsLogo} />JAVASCRIPT</p> 
                <p><img className="rounded-xl" src={reactLogo}  />REACT</p> 
                <p><img className="rounded-xl" src={reduxLogo}  />REDUX</p> 
                <p><img className="rounded-xl" src={nodeLogo}  />NODE</p> 
                <p><img className="rounded-xl" src={vscodeLogo}  />VS CODE</p> 
                <p><img className="rounded-xl" src={figmaLogo}  />FIGMA</p> 
            </div>
        </main>
        
        </>
    )
}