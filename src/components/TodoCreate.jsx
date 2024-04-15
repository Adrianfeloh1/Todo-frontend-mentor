export const TodoCreate = () => {
   return (
      <form className=" flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
         <button className=" inline-block h-5 w-5 rounded-full border-2 "></button>
         <input
            type="text"
            placeholder="Create a new todo..."
            className=" w-full text-sm text-gray-400 outline-none "
         />
      </form>
   );
};
