import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { TodoComputed } from "./components/TodoComputed";
import { TodoCreate } from "./components/TodoCreate";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";


/* const InitialStateTodos = [
   { id: 1, title: "Complete online JavaScript course", completed: true },
   { id: 2, title: "Jog around the park 3x ", completed: false },
   { id: 3, title: "10 minutes meditation", completed: false },
   { id: 4, title: "Read for 1 hour", completed: false },
   { id: 5, title: "Pick up groceries", completed: false },
   { id: 6, title: "Complete Todo App on Fronted Mentor", completed: false },
]; */

const InitialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
   const result = [...list];
   const [removed] = result.splice(startIndex, 1);
   result.splice(endIndex, 0, removed);

   return result;
};

export const App = () => {
   const [todos, setTodos] = useState(InitialStateTodos);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   const createTodo = (title) => {
      const newTodo = {
         id: Date.now(),
         title: title.trim(),
         completed: false,
      };

      setTodos([...todos, newTodo]);
   };

   const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const updateTodo = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
         ),
      );
   };

   const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

   const clearCompleted = () => {
      setTodos(todos.filter((todo) => !todo.completed));
   };

   const [filter, setFilter] = useState("all");

   const changeFilter = (filter) => setFilter(filter);

   const filteredTodos = () => {
      switch (filter) {
         case "all":
            return todos;
         case "active":
            return todos.filter((todo) => !todo.completed);
         case "completed":
            return todos.filter((todo) => todo.completed);
         default:
            return todos;
      }
   };

   const handleDragEnd = (result) => {
      const { destination, source } = result;
      if (!destination) return;
      if (
         source.index === destination.index &&
         source.droppableId === destination.droppableId
      )
         return;

      setTodos((prevTasks) =>
         reorder(prevTasks, source.index, destination.index),
      );
   };

   return (
      <>
         <div
            className=" min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain 
         bg-no-repeat transition-all duration-500 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
         md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
         >
            <Header />
            <main className=" container mx-auto mt-8 px-4 md:max-w-2xl">
               <TodoCreate createTodo={createTodo} />

               <DragDropContext onDragEnd={handleDragEnd}>
                  <TodoList
                     todos={filteredTodos()}
                     removeTodo={removeTodo}
                     updateTodo={updateTodo}
                  />
               </DragDropContext>

               <TodoComputed
                  computedItemsLeft={computedItemsLeft}
                  clearCompleted={clearCompleted}
               />
               <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className=" mt-8 text-center text-sm text-gray-600 transition-all duration-500 dark:text-gray-400">
               Drag and drop reorder list
            </footer>
         </div>
      </>
   );
};
