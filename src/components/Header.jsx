import { useEffect, useState } from "react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export const Header = () => {
   const [darkMode, setDarkMode] = useState(true);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [darkMode]);

   return (
      <header className=" container mx-auto px-4 pt-8">
         <div className=" flex justify-between">
            <h1 className=" text-3xl font-semibold uppercase tracking-[10px] text-white ">
               TODO
            </h1>
            <button onClick={() => setDarkMode(!darkMode)}>
               {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
         </div>
      </header>
   );
};
