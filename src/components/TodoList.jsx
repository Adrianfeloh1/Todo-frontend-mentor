import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
   return (
      <div className=" mt-4 rounded-t-md bg-white">
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
         ))}
      </div>
   );
};

TodoList.propTypes = {
   todos: PropTypes.array.isRequired,
};
