export default function Description() {
  return (
    <div className="sm:flex pt-14">
      <div className="font-extrabold text-5xl lg:text-7xl  lg:w-1/2 "><div className=" text-textBlack dark:text-lBule p-1">Hi, I am</div>
        <div className="p-1 text-lightmodeblue dark:text-lightBule">Sandamina</div>
        <div className="p-1 text-lightmodeblue dark:text-lightBule">Wijenayake.</div>
      </div>
      <div className="lg:w-1/3 m-auto text-justify mt-10 sm:mt-0 pl-5">
        <p className="text-textBlack2 text-lg dark:text-paraColor ">I'm Sandamina Wijenayake, a passionate front-end developer specializing in React and modern web technologies. I love crafting clean, user-friendly interfaces and bringing ideas to life with elegant design and efficient code.</p>
        <a href="#contact">
          <button className="mt-6 text-white bg-lightmodeblue hover:bg-lightmodeblue2 dark:text-darkBg dark:bg-lightBule font-semibold dark:hover:bg-bHover text-sm py-3 px-5 rounded-full">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
}