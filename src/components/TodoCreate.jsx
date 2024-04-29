import PropTypes from "prop-types";

import { useState } from "react";

export const TodoCreate = ({ createTodo }) => {
   const [title, setTitle] = useState("");

   const handleSubmitAddTodo = (event) => {
      event.preventDefault();

      if (title.trim().length > 0) {
         createTodo(title);
         setTitle("");
      }

      setTitle("");
   };

   return (
      <form
         onSubmit={handleSubmitAddTodo}
         className=" flex items-center gap-4 overflow-hidden rounded-md bg-white
                     p-4 transition-all duration-500 dark:bg-gray-800"
      >
         <button className=" inline-block h-5 w-5 rounded-full border-2 "></button>
         <input
            type="text"
            placeholder="Create a new todo..."
            className=" w-full text-sm text-gray-400 outline-none transition-all
                        duration-500 dark:bg-gray-800"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
         />
      </form>
   );
};

TodoCreate.propTypes = {
   createTodo: PropTypes.func.isRequired,
};
