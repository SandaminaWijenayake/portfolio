// import html from '../assets/html.webp';
export default function Skills() {
    return (
        <div className="w-5/6 m-auto">
            <h1 id="techStack" className="font-extrabold text-3xl pt-24  text-textBlack dark:text-lBule text-center "> TECH STACK
            </h1>
            <div className="border-lightmodeblue dark:border-lightBule border-b-8 w-12 mb-14 m-auto mt-2"></div>
            <div>
                <div className="grid grid-cols-5 items-center justify-center gap-8 " >
                    <div className="group relative w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl overflow-hidden">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px] bg-lightmodeblue dark:bg-lightBule scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>


                        <i className="devicon-html5-plain colored text-5xl"></i>
                        <p className="text-xs font-bold text-textBlack dark:text-lBule pt-2">HTML</p>
                    </div>
                    <div className="relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-css3-plain colored text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>CSS</p>
                    </div> <div className="relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-javascript-plain colored text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>javascript</p>
                    </div> <div className="relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule  scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-typescript-plain colored text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>typescript</p>
                    </div>

                    <div className="relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule  scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-react-original colored text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>react</p>
                    </div>
                    <div></div>
                    <div className="relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule  scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-materialui-plain colored text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>MUI</p>
                    </div>
                    <div className=" relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule  scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-tailwindcss-original colored text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>tailwind CSS</p>
                    </div>
                    <div className="relative group overflow-hidden w-32 h-32 bg-backGround2  dark:bg-cardBg text-center pt-7 rounded-2xl">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[6px]  bg-lightmodeblue dark:bg-lightBule  scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"></div>
                        <i className="devicon-github-original text-5xl "></i>
                        <p className='text-xs font-bold text-textBlack dark:text-lBule pt-2'>github</p>
                    </div>
                    <div></div>



                </div>


            </div>
        </div >
    )
}