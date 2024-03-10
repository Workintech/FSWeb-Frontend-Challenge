export default function Header (){
    //Buradaki içerik state olarak gelecek
    return(
        <>
        <header className="flex flex-end px-10 pt-10 pb-2 md:px-40" >
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="relative w-11 h-6 rounded-full peer dark:bg-pink-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow2  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-pink2"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">DARK MODE</span>
            </label>
        </header>
        </>
    )
}