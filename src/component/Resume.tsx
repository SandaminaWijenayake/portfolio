import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Resume() {
    return (
        <div >
            <h1 id='contact' className="font-extrabold text-3xl pt-24 text-textBlack dark:text-lBule text-center "> GET IN TOUCH</h1>
            <div className="border-lightmodeblue dark:border-lightBule border-b-8 w-12 mb-14 m-auto mt-2"></div>

            <div className="pb-5 flex justify-center gap-5">
                {/* <a href="mailto:sandaminawijenayake0717@gmail.com"> */}
                  <button onClick={() => window.location.href = 'mailto:sandaminawijenayake0717@gmail.com?subject=Subject&body=Message'} className="hover:bg-lightmodeblue2 dark:hover:bg-bHover text-backGround dark:text-darkBg bg-lightmodeblue dark:bg-lightBule font-semibold text-sm py-3 px-5 rounded-full">
                     <EmailIcon />
                     Email
                    </button>
                {/* </a> */}
                <button   onClick={() => window.open("https://github.com/SandaminaWijenayake", "_blank")} className="hover:bg-lightmodeblue2 dark:hover:bg-bHover text-backGround dark:text-darkBg bg-lightmodeblue dark:bg-lightBule font-semibold text-sm py-3 px-5 rounded-full">
                    <GitHubIcon />
                    Github
                </button>
                <button onClick={() => window.open("https://www.linkedin.com/in/sandamina-wijenayake-4a7451249/", "_blank")} className="hover:bg-lightmodeblue2 dark:hover:bg-bHover text-backGround dark:text-darkBg bg-lightmodeblue dark:bg-lightBule font-semibold text-sm py-3 px-5 rounded-full">
                    <LinkedInIcon />
                    Linkedin
                </button>
            </div>
        </div>
    )
}
