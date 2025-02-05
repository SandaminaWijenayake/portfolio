import travel from '../assets/travel.png';
import metro from '../assets/metro.png';

export default function Projects() {
    return (
        <div>
            <h1 id='project' className="font-extrabold text-3xl pt-24 text-textBlack dark:text-lBule text-center">
                PROJECTS
            </h1>
            <div className="border-lightmodeblue dark:border-lightBule border-b-8 w-12 mb-14 m-auto mt-2"></div>
            <div>
                {[
                    {
                        img: travel,
                        title: 'Travel website',
                        desc: 'Developed a responsive travel website using React, Tailwind CSS, Firebase, and MUI. The platform showcases Sri Lanka\'s attractions, allows users to book predefined tour packages, and customize tours to suit their preferences.',
                        github: 'https://github.com/SandaminaWijenayake/jagath-tours',
                        live: 'https://sprightly-dieffenbachia-c043a1.netlify.app/',
                    },
                    {
                        img: metro,
                        title: 'Matrimony website',
                        desc: 'Developed a responsive matrimony website using React and Firebase as my second year university project, offering user authentication, a reliable database, and filtering options for age, religion, ethnicity, and civil status to ensure a seamless user experience.',
                        github: 'https://github.com/SandaminaWijenayake/group-project',
                        live: 'https://vocal-wisp-a87d51.netlify.app/',
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="sm:w-10/12 md:w-8/12 lg:w-full m-auto bg-backGround2 dark:bg-cardBg mb-10 rounded-xl flex flex-col lg:flex-row"
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 items-center flex justify-center pt-5 sm:pt-0">
                            <img src={project.img} alt="" className="w-5/6 m-auto" />
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 text-center">
                            <div className="py-7 font-extrabold text-lg text-textBlack dark:text-lBule">
                                {project.title}
                            </div>
                            <div className="w-5/6 m-auto pb-6 text-textBlack2 dark:text-paraColor">
                                {project.desc}
                            </div>

                            {/* Technologies */}
                            <div className="w-5/6 m-auto font-bold text-sm">
                                <ul className="flex text-lightmodeblue2 dark:text-lightBule flex-wrap justify-center gap-3">
                                    {['React.js', 'MUI', 'Tailwind', 'Firebase'].map((tech, i) => (
                                        <li
                                            key={i}
                                            className="dark:bg-transparent bg-lightModebgCard py-1 px-2 rounded-3xl"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Links */}
                            <div className="flex justify-center gap-3 mt-7 mb-10">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <div className="group relative w-11 h-11 rounded-full border-2 border-lightmodeblue dark:border-lightBule flex items-center justify-center cursor-pointer">
                                        <div className="absolute inset-0 bg-lightmodeblue dark:bg-lightBule rounded-full transform scale-0 group-hover:scale-100 -m-[2px] transition-transform duration-200"></div>
                                        <svg
                                            className="relative z-10 group-hover:text-backGround2 dark:group-hover:text-darkBg transition-colors duration-200 text-lg font-bold w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                            />
                                        </svg>
                                    </div>
                                </a>

                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <div className="group relative w-11 h-11 rounded-full border-2 border-lightmodeblue dark:border-lightBule flex items-center justify-center cursor-pointer">
                                        <div className="absolute inset-0 bg-lightmodeblue dark:bg-lightBule rounded-full transform scale-0 group-hover:scale-100 -m-[2px] transition-transform duration-200"></div>
                                        <div className="relative z-10 group-hover:text-backGround2 dark:group-hover:text-darkBg transition-colors duration-200 text-lg font-bold">
                                            {"</>"}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
