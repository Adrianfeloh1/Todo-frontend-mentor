import { MoonIcon } from "./icons/MoonIcon";

export const Header = () => {
   return (
      <header className=" container mx-auto px-4 pt-8">
         <div className=" flex justify-between">
            <h1 className=" text-3xl font-semibold uppercase tracking-[10px] text-white ">
               TODO
            </h1>
            <MoonIcon />
         </div>
      </header>
   );
};
