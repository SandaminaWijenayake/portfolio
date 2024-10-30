export default function Description() {
  return (
    <div className="flex pt-14">
      <div className="font-extrabold text-7xl  w-1/2 "><div className=" text-textBlack dark:text-lBule p-1">Hi, I am</div> <div className="p-1 text-lightmodeblue dark:text-lightBule">Sandamina</div> <div className="p-1 text-lightmodeblue dark:text-lightBule">Wijenayake.</div></div>
      <div className="w-1/3 m-auto text-justify">
        <p className="text-textBlack2 dark:text-paraColor ">I am a highly skilled and confident front-end developer with 2 years of experience working in fast-paced startups.</p>
        <a href="#contact">
          <button className="mt-6 text-white bg-lightmodeblue hover:bg-lightmodeblue2 dark:text-darkBg dark:bg-lightBule font-semibold dark:hover:bg-bHover text-sm py-3 px-5 rounded-full">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
}