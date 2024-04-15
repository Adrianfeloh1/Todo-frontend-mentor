import PropTypes from "prop-types";
import { CrossIcon } from "./icons/CrossIcon";

export const TodoItem = ({todo}) => {
   
   return (
      <article className=" flex gap-4 border-b p-4 text-sm">
         <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 "></button>
         <p className=" grow text-gray-600 ">
            {todo.title}
         </p>
         <button className=" flex-none">
            <CrossIcon />
         </button>
      </article>
   );
};

TodoItem.propTypes = {
   todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
   }).isRequired
};
