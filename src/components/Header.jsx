import LanguageToggle from "./LanguageToggle";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Header (){
    const { darkMode, toggleDarkMode } = useDarkMode();
    console.log("Dark-mode check:", darkMode);
    return(
        <>
        <header className="flex justify-end px-10 pb-8 pt-20 md:px-60" >
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode}/>
                <div className={"relative p-2 w-11 h-6 rounded-full peer dark:bg-pink2 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow2  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-black"}></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{darkMode ? "LIGHT MODE" : "DARK MODE"}</span>
            </label>
            <p className="px-4"> | </p>
            <LanguageToggle/>
        </header>
        </>
    )
}