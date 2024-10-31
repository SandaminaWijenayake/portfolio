import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

interface toggleDarkModeProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;

}

export default function Navbar({ toggleDarkMode, isDarkMode }: toggleDarkModeProps) {



    return (
        <div>
            <div className=" h-32 flex justify-between items-center" >
                {/* <div className="text-lightBule font-black text-lg border-4 border-lightBule rounded-full p-1" >SW</div> */}
                <div className="group relative w-11 h-11  rounded-full border-4 border-lightmodeblue dark:border-lightBule flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 dark:bg-lightBule bg-lightmodeblue rounded-full transform scale-0 group-hover:scale-100 -m-[2px] transition-transform duration-200"></div>

                    <div className="relative z-10 text-lightmodeblue dark:text-lightBule group-hover:text-backGround2 dark:group-hover:text-darkBg transition-colors duration-200 text-lg font-bold">
                        SW
                    </div>

                </div>
                <div className="flex gap-6 text-textBlack dark:text-lBule text-base font-medium cursor-pointer">
                    <a href="#project" className="relative group hover:text-lightmodeblue hover:dark:text-bHover">
                        Projects
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lightmodeblue dark:bg-bHover  scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    </a>
                    <a href="#techStack" className="relative group hover:text-lightmodeblue hover:dark:text-bHover">
                        Tech Stack
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lightmodeblue dark:bg-bHover  scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    </a>
                    <a href="#contact" className="relative group hover:text-lightmodeblue hover:dark:text-bHover">
                        Contact
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lightmodeblue dark:bg-bHover  scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    </a>
                    <button onClick={toggleDarkMode} className="relative group  -translate-y-1">
                        <div className="absolute inset-0 bg-lightmodeblue dark:bg-lightBule rounded-full w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>

                        <div className="relative z-10 group-hover:text-white dark:group-hover:text-darkBg transition-colors  duration-200 text-lg font-bold translate-x-[4px] translate-y-[1px]">
                            {isDarkMode ? <LightModeIcon /> : <NightlightIcon />}
                        </div>
                    </button>

                </div>
            </div>
        </div >
    )
}

