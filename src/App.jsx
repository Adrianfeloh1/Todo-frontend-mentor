import { CrossIcon } from "./components/icons/CrossIcon";
import { MoonIcon } from "./components/icons/MoonIcon";


export const App = () => {
   return (
      <>
         <div className=" min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            <header className=" container mx-auto px-4 pt-8">
               <div className=" flex justify-between">
                  <h1 className=" text-3xl font-semibold uppercase tracking-[10px] text-white ">
                     TODO
                  </h1>
                  <MoonIcon />
               </div>
               <form className=" mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
                  <button className=" inline-block h-5 w-5 rounded-full border-2 "></button>
                  <input
                     type="text"
                     placeholder="Create a new todo..."
                     className=" w-full text-gray-400 outline-none "
                  />
               </form>
            </header>
            <main className=" container mx-auto mt-8 px-4 ">
               <div className=" rounded-md bg-white ">
                  <article className=" flex gap-4 border-b p-4">
                     <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 "></button>
                     <p className=" grow text-gray-600">
                        Complete online JavaScript course
                     </p>
                     <button className=" flex-none">
                        <CrossIcon />
                     </button>
                  </article>
                  <article className=" flex gap-4 border-b p-4">
                     <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 "></button>
                     <p className=" grow text-gray-600">
                        Complete online JavaScript course
                     </p>
                     <button className=" flex-none">
                        <CrossIcon />
                     </button>
                  </article>
                  <article className=" flex gap-4 border-b p-4">
                     <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 "></button>
                     <p className=" grow text-gray-600">
                        Complete online JavaScript course
                     </p>
                     <button className=" flex-none">
                        <CrossIcon />
                     </button>
                  </article>

                  <section className=" flex justify-between p-4 text-gray-400">
                     <span>5 items left</span>
                     <button>Clear Completed</button>
                  </section>
               </div>
            </main>

            <section className=" container mx-auto px-4">
               <div className=" mt-4 flex justify-center gap-4 rounded-md bg-white p-4 font-semibold text-gray-400">
                  <button className=" hover:text-blue-600">All</button>
                  <button className=" hover:text-blue-600">Active</button>
                  <button className=" hover:text-blue-600">Completed</button>
               </div>

               <p className=" mt-8 text-center text-gray-600">
                  Drag and drop reorder list
               </p>
            </section>
         </div>
      </>
   );
};
