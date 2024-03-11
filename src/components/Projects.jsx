import computerImage from "../assets/images/computer.png"
export default function Projects (){
    //Buradaki içerik state olarak gelecek
    //Buradaki içerik maple yazılacak
    const projectsData = [
        {
            title: "Random Jokes",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
            tags: ["react", "vercel", "axios", "router"],
            githubLink: "#",
            appLink: "#"
        },
        {
            title: "Are you bored?",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
            tags: ["react", "redux", "axios", "router", "vercel"],
            githubLink: "#",
            appLink: "#"
        }
    ];

    
    return(
        <>
        <main className="px-10 py-10 md:px-60 md:py-20 flex flex-col items-center">
            <h2 className="text-4xl tracking-wide font-medium pb-10">Projects</h2>
            <div className=" grid md:grid-cols-2 gap-10">
            {projectsData.map((project, index) => (
                <section key={index} className={index % 2 === 0 ? "bg-bluecard rounded-2xl w-full px-6 py-8 relative" : "bg-greencard rounded-2xl w-full px-6 py-8 relative"}>
                    <div className="">
                        <h2 className="text-3xl font-medium py-4">{project.title}</h2>
                        <p className="">{project.description}</p>
                        <div className="flex flex-wrap gap-2 py-4">
                            {project.tags.map((tag, tagIndex) => (
                                <p key={tagIndex} className="bg-white rounded-3xl py-2 px-3">{tag}</p>
                                ))}
                        </div>
                        <div className="flex justify-between text-xl font-medium py-4 mb-40 md:mb-50">
                            <a href={project.githubLink}>View on Github</a>
                            <a href={project.appLink}>Go to App -</a>
                        </div>  
                    </div>
                    <img src={computerImage} className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-1/4" alt="" />
                </section>
            ))}
            </div>
            
        </main>
            
        </>
    )
}