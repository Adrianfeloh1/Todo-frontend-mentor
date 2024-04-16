import PropTypes from "prop-types";

export const TodoFilter = ({ changeFilter, filter }) => {
   return (
      <section className=" container mx-auto text-sm">
         <div className=" mt-4 flex justify-center gap-4 rounded-md bg-white dark:bg-gray-800 p-4 font-semibold text-gray-400">
            <button
               className={`${
                  filter === "all"
                     ? " text-blue-600 hover:text-gray-400"
                     : " text-gray-400 hover:text-blue-600"
               }`}
               onClick={() => changeFilter("all")}
            >
               All
            </button>
            <button
               className={`${
                  filter === "active"
                     ? " text-blue-600 hover:text-gray-400"
                     : " text-gray-400 hover:text-blue-600"
               }`}
               onClick={() => changeFilter("active")}
            >
               Active
            </button>
            <button
               className={`${
                  filter === "completed"
                     ? " text-blue-600 hover:text-gray-400"
                     : " text-gray-400 hover:text-blue-600"
               }`}
               onClick={() => changeFilter("completed")}
            >
               Completed
            </button>
         </div>
      </section>
   );
};

TodoFilter.propTypes = {
   changeFilter: PropTypes.func.isRequired,
   filter: PropTypes.oneOf(["all", "active", "completed"]).isRequired,
};
