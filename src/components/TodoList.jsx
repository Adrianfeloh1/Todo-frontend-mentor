import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, removeTodo, updateTodo }) => {
   return (
      <div className=" mt-4 rounded-t-md bg-white">
         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               todo={todo}
               removeTodo={removeTodo}
               updateTodo={updateTodo}
            />
         ))}
      </div>
   );
};

TodoList.propTypes = {
   todos: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         title: PropTypes.string.isRequired,
         completed: PropTypes.bool.isRequired
      })
   ).isRequired,
   removeTodo: PropTypes.func.isRequired,
   updateTodo: PropTypes.func.isRequired
};
