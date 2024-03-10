export default function Footer (){
    //Buradaki içerik maple yazılacak
    return(
        <>
        <main className="px-10 py-10 md:px-40 md:py-20  md:grid md:grid-cols-3 gap-10">
            <p className="col-span-2 text-3xl md:text-4xl mt-4 md:mb-8 tracking-wide leading-normal font-medium md:pl-20 text-right pr-10">Let’s work together on your next product.</p>
            <div className="flex justify-around gap-4 mt-4 md:flex-col md:justify-center font-medium">
                <a className="text-sky-600" href="">Github</a>
                <a className="text-black" href="">Personal Blog</a>
                <a className="text-cyan-800" href="">Linkedin</a>
                <a className="text-pink2" href="">Email</a>
            </div> 
        </main>
        
        </>
    )
}