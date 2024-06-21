import { useState, useEffect } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState(() => {
    // 嘗試從localStorage獲取數據，如果沒有數據則返回空數組
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 當待辦事項變更時，將其保存到LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random(), isCompleted: false, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const toggleIsEditing = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  const editTodo = (id, newContent) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, content: newContent, isEditing: false } : todo));
  };

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          toggleIsEditing={toggleIsEditing}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;

