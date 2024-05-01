import PropTypes from "prop-types";
import { CrossIcon } from "./icons/CrossIcon";
import { CheckIcon } from "./icons/CheckIcon";
import React from "react";

export const TodoItem = React.forwardRef(function TodoItem({ todo, removeTodo, updateTodo, ...props }, ref) {
   const { id, title, completed } = todo;

   return (
      <article {...props} ref={ref} className="flex gap-4 border-b dark:border-gray-700 p-4 text-sm dark:bg-gray-800 transition-all duration-500">
         <button
            className={`${
               completed
                  ? "grid h-5 w-5 flex-none place-items-center rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  : "inline-block h-5 w-5 flex-none rounded-full border-2"
            }`}
            onClick={() => updateTodo(id)}
         >
            {completed && <CheckIcon />}
         </button>
         <p
            className={`grow text-gray-600 dark:text-gray-400 ${completed && " text-[#a0a0a0] line-through"}`}
         >
            {title}
         </p>
         <button className="flex-none" onClick={() => removeTodo(id)}>
            <CrossIcon />
         </button>
      </article>
   );
});


TodoItem.propTypes = {
   todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
   }).isRequired,   
   removeTodo: PropTypes.func.isRequired,
   updateTodo: PropTypes.func.isRequired
};
