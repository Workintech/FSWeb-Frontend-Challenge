import computerImage from "../assets/images/computer.png"
export default function Projects (){
    //Buradaki içerik state olarak gelecek
    //Buradaki içerik maple yazılacak
    return(
        <>
        <main className="px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium pb-10">Projects</h2>
            <section className="bg-bluecard rounded-2xl w-full px-6 py-8">
                <h2 className="text-3xl font-medium py-4">Proje Başlığı</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                <div className="flex flex-wrap gap-2 py-4">
                    <p className="bg-white rounded-3xl py-2 px-3">tag11111</p>
                    <p className="bg-white rounded-3xl py-2 px-3">tag2222</p>
                    <p className="bg-white rounded-3xl py-2 px-3">tag33333</p>
                    <p className="bg-white rounded-3xl py-2 px-3">tag44444</p>
                    <p className="bg-white rounded-3xl py-2 px-3">tag55555</p>
                </div>
                <div className="flex justify-between text-xl font-medium py-4">
                    <a href="">View on Github</a>
                    <a href="">Go to App -</a>
                </div>
                <img src="" alt="" />
                <img className="py-8" src={computerImage} alt="" />
            </section>
        </main>
            
        </>
    )
}