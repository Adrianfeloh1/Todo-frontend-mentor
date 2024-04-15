import { useState } from "react";

import { Header } from "./components/Header";
import { TodoComputed } from "./components/TodoComputed";
import { TodoCreate } from "./components/TodoCreate";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";


const InitialStateTodos = [
   { id: 1, title: "Complete online JavaScript course", completed: true },
   { id: 2, title: "Jog around the park 3x ", completed: false },
   { id: 3, title: "10 minutes meditation", completed: false },
   { id: 4, title: "Read for 1 hour", completed: false },
   { id: 5, title: "Pick up groceries", completed: false },
   { id: 6, title: "Complete Todo App on Fronted Mentor", completed: false }
];

export const App = () => {
   const [todos, setTodos] = useState(InitialStateTodos);

   const createTodo = (title) => {
     const newTodo = {
      id: Date.now(),
      title,
      completed: false
     }

     setTodos([...todos, newTodo])
   }

   return (
      <>
         <div className=" min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
            <Header />
            <main className=" container mx-auto mt-8 px-4 ">

               <TodoCreate createTodo={createTodo} />
               <TodoList todos={todos} />
               <TodoComputed />
               <TodoFilter />

            </main>
            <footer className=" mt-8 text-center text-sm text-gray-600">
               Drag and drop reorder list
            </footer>
         </div>
      </>
   );
};
