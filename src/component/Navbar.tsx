import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

interface ToggleDarkModeProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

export default function Navbar({ toggleDarkMode, isDarkMode }: ToggleDarkModeProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* Navbar container */}
            <div className="h-32 flex justify-between items-center px-4">
                {/* Logo */}
                <div className="group relative w-11 h-11 rounded-full border-4 border-lightmodeblue dark:border-lightBule flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 dark:bg-lightBule bg-lightmodeblue rounded-full transform scale-0 group-hover:scale-100 -m-[2px] transition-transform duration-200"></div>
                    <div className="relative z-10 text-lightmodeblue dark:text-lightBule group-hover:text-backGround2 dark:group-hover:text-darkBg transition-colors duration-200 text-lg font-bold">
                        SW
                    </div>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden sm:flex gap-6 text-textBlack dark:text-lightBule text-base font-medium cursor-pointer">
                    <a href="#project" className="relative group hover:text-lightmodeblue hover:dark:text-bHover">
                        Projects
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lightmodeblue dark:bg-bHover scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    </a>
                    <a href="#techStack" className="relative group hover:text-lightmodeblue hover:dark:text-bHover">
                        Tech Stack
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lightmodeblue dark:bg-bHover scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    </a>
                    <a href="#contact" className="relative group hover:text-lightmodeblue hover:dark:text-bHover">
                        Contact
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lightmodeblue dark:bg-bHover scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
                    </a>
                    {/* Dark Mode Toggle */}
                    <button onClick={toggleDarkMode} className="relative group">
                        <div className="absolute inset-0 bg-lightmodeblue dark:bg-lightBule rounded-full w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                        <div className="relative z-10 group-hover:text-white dark:group-hover:text-darkBg transition-colors duration-200 text-lg font-bold">
                            {isDarkMode ? <LightModeIcon /> : <NightlightIcon />}
                        </div>
                    </button>
                </div>
                <div className="sm:hidden">

                    <button onClick={toggleDarkMode} className="sm:hidden relative group mr-2">
                        <div className="absolute inset-0 bg-lightmodeblue dark:bg-lightBule rounded-full w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                        <div className="relative z-10 group-hover:text-white dark:group-hover:text-darkBg transition-colors duration-200 text-lg font-bold">
                            {isDarkMode ? <LightModeIcon /> : <NightlightIcon />}
                        </div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden z-20 text-textBlack dark:text-lightBule"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`sm:hidden absolute top-32 left-0 w-full h-[50vh] transition-all duration-300 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <div className="bg-white dark:bg-darkBg text-textBlack dark:text-lightBule flex flex-col gap-6 items-center py-10 shadow-lg">
                    <a href="#project" className="hover:text-lightmodeblue hover:dark:text-bHover" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#techStack" className="hover:text-lightmodeblue hover:dark:text-bHover" onClick={() => setMenuOpen(false)}>Tech Stack</a>
                    <a href="#contact" className="hover:text-lightmodeblue hover:dark:text-bHover" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
            </div>
        </div>
    );
}
