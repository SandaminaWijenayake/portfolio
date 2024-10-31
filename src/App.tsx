import { useEffect, useState } from 'react';
import Description from './component/Description';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Projects from './component/Porjects';
import Resume from './component/Resume';
import Skills from './component/Skills';
import './index.css';
function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]); 

  const toggleDarkMode = () => {
    console.log('Dark mode toggled:', !isDarkMode);
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    {console.log(isDarkMode, "dark mode")}

  };

  return (
    <>
      <div className='bg-backGround dark:bg-darkBg '>
        <div className='dark:text-lightBule w-3/5 m-auto '>
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Description />
          <Projects />
          <Skills />
          <Resume />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
