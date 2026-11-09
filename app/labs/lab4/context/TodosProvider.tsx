import { useState, type ReactNode } from "react";
import { TodosContext, type Todo } from "./todosContext";

export default function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Finish Lab 4" },
    { id: "2", title: "Read Chapter 4" },
  ]);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: new Date().getTime().toString(), title }]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
