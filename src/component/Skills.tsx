export default function Skills() {
    return (
        <div className="w-5/6 m-auto">
            <h1 id="techStack" className="font-extrabold text-3xl pt-24 text-textBlack dark:text-lBule text-center">
                TECH STACK
            </h1>
            <div className="border-lightmodeblue dark:border-lightBule border-b-8 w-12 mb-14 m-auto mt-2"></div>

            <div className="flex flex-wrap justify-center gap-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {[
                        { icon: "devicon-html5-plain", name: "HTML" },
                        { icon: "devicon-css3-plain", name: "CSS" },
                        { icon: "devicon-javascript-plain", name: "JavaScript" },
                        { icon: "devicon-typescript-plain", name: "TypeScript" },
                        { icon: "devicon-materialui-plain", name: "MUI" },
                        { icon: "devicon-react-original", name: "React" },
                        { icon: "devicon-tailwindcss-original", name: "Tailwind CSS" },
                        { icon: "devicon-github-original", name: "GitHub" }
                    ].map((tech, index) => (
                        <div key={index} className="group relative w-32 h-32 bg-backGround2 dark:bg-cardBg text-center pt-7 rounded-2xl overflow-hidden">
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px] bg-lightmodeblue dark:bg-lightBule scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                            <i className={`${tech.icon} colored text-5xl`}></i>
                            <p className="text-xs font-bold text-textBlack dark:text-lBule pt-2">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
