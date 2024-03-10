export default function Profile (){
    //Buradaki içerik state olarak gelecek
    return(
        <>
        <main className="px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium  pb-10">Profile</h2>
            <section className="grid md:grid-cols-2">
                <div className="bg-white rounded-2xl px-4 py-6">
                    <h2 className="text-m text-pink2 font-medium py-4"> Basic Information</h2>
                    <div className="grid grid-cols-2 gap-4 ">
                        <dt className="font-bold">Doğum Tarihi</dt> <dd>25.07.1998</dd>
                        <dt className="font-bold">İkamet Şehri</dt> <dd>İzmir</dd>
                        <dt className="font-bold">Eğitim Durumu</dt> <dd>İzmir Yüksek Teknoloji Enstitüsü, Mimarlık, 2023</dd>
                        <dt className="font-bold">Tercih Ettiği Rol</dt> <dd>Frontend, UI</dd>
                    </div>
                </div>
                <div className="py-10 md:ml-20">
                    <h2 className="text-mfont-medium py-4">About Me</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </section> 
        </main>
        
        </>
    )
}