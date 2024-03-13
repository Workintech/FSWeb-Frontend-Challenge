import LanguageToggle from "./LanguageToggle";
import { useTheme } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";

export default function Header (){
    const { theme, toggleTheme } = useTheme();
    console.log("Dark-mode check:", theme);

    const { language } = useContext(LanguageContext);
    return(
        <>
        <header className="flex justify-end px-10 pb-8 pt-20 md:px-60" >
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={theme === "dark"} onChange={toggleTheme}/>
                <div className={"relative p-2 w-11 h-6 rounded-full peer dark:bg-pink2 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow2  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-black"}></div>
                <span className={theme === "dark" ? "ms-3 text-sm font-semibold text-white ":"ms-3 text-sm font-semibold text-gri2 "}>
                {theme === "dark" && language === "tr" ? "GÜNDÜZ" :
                theme === "dark" && language === "en" ? "LIGHT MODE" :
                theme !== "dark" && language === "tr" ? "GECE" :
                "DARK MODE"}
                </span>
            </label>
            <p className="px-4"> | </p>
            <LanguageToggle/>
        </header>
        </>
    )
}