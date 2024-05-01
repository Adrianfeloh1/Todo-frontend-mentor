import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, removeTodo, updateTodo }) => {
   return (
      <Droppable droppableId="todos">
         {(dropableProvided) => (
            <div
               ref={dropableProvided.innerRef}
               {...dropableProvided.droppableProps}
               className="mt-4 overflow-hidden rounded-t-md bg-white transition-all duration-500 dark:bg-gray-800"
            >
               {todos.map((todo, index) => (
                  <Draggable
                     key={todo.id}
                     index={index}
                     draggableId={`${todo.id}`}
                  >
                     {(dragableProvided) => (
                        <TodoItem
                           todo={todo}
                           removeTodo={removeTodo}
                           updateTodo={updateTodo}
                           ref={dragableProvided.innerRef}
                           {...dragableProvided.dragHandleProps}
                           {...dragableProvided.draggableProps}
                        />
                     )}
                  </Draggable>
               ))}

               {dropableProvided.placeholder}
            </div>
         )}
      </Droppable>
   );
};


TodoList.propTypes = {
   todos: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         title: PropTypes.string.isRequired,
         completed: PropTypes.bool.isRequired,
      }),
   ).isRequired,
   removeTodo: PropTypes.func.isRequired,
   updateTodo: PropTypes.func.isRequired,
};
