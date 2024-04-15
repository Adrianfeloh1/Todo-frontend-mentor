export const TodoFilter = () => {
   return (
      <section className=" container mx-auto text-sm">
         <div className=" mt-4 flex justify-center gap-4 rounded-md bg-white p-4 font-semibold text-gray-400">
            <button className=" hover:text-blue-600">All</button>
            <button className=" hover:text-blue-600">Active</button>
            <button className=" hover:text-blue-600">Completed</button>
         </div>
      </section>
   );
};
