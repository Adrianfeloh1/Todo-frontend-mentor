import PropTypes from "prop-types";
import { CrossIcon } from "./icons/CrossIcon";
import { CheckIcon } from "./icons/CheckIcon";

export const TodoItem = ({ todo, removeTodo, updateTodo }) => {
   const { id, title, completed } = todo;

   return (
      <article className=" flex gap-4 border-b p-4 text-sm">
         <button
            className={`${
               completed
                  ? "grid h-5 w-5 flex-none place-items-center rounded-full border-2 bg-gradient-to-r from-blue-400 to-purple-400"
                  : "inline-block h-5 w-5 flex-none rounded-full border-2"
            }`}
            onClick={() => updateTodo(id)}
         >
            {completed && <CheckIcon />}
         </button>
         <p
            className={`grow text-gray-600 ${completed && " text-gray-300 line-through"}`}
         >
            {title}
         </p>
         <button className=" flex-none" onClick={() => removeTodo(id)}>
            <CrossIcon />
         </button>
      </article>
   );
};

TodoItem.propTypes = {
   todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
   }).isRequired,   
   removeTodo: PropTypes.func.isRequired,
   updateTodo: PropTypes.func.isRequired
};
