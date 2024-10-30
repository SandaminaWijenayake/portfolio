/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        lightBule : "#807AE8",
        darkBg : "#030217",
        lBule : "#CDCDFF",
        cardBg : "#161c2954",
        paraColor :"#bdbddd" ,
        bHover : "#706aec",
        lightmodeblue : "#306cc4", 
        lightmodeblue2 : "#185dc7", 
      textBlack : "#444",
      textBlack2 : "##222",
      backGround : "#f5f6f7",
      backGround2 : "#fff",
      lightModebgCard : "rgba(44, 93, 206, 0.1)",
      },
      spacing: {
        'word-4': '4px',
        'word-8': '8px',
        'word-12': '12px',
      },
    },
  },
  plugins: [],
}

