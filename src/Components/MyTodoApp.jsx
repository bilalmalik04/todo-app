import { useState, useEffect , useRef } from "react";

function MyTodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [userName , setUserName] = useState('');
  // username exits
 const hasDone = useRef(false);
  // end of username here
  //  new todo logic 
   const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInput("");
  };

  // Delete  todo  logic 
   const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Clear all todos  logic
  const clearTodos = () => {
    setTodos([]);
  };

  // Optional: Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);

    // userid fuc
    if(!hasDone.current) {
      const userId = prompt('Enter your Name ?');
      setUserName(userId);
      hasDone.current = true;
    }
  }, []);

  // Optional: Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="mywork">
      <h1 className="userName" >
        Hi <span style={{color : 'orangered', fontStyle : 'italic'}}>{userName}</span>
      </h1>
      <h2 style={{
        marginBottom : '30px' 
      }}>Todo List</h2>

      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>
              <i className="fa-solid fa-multiply"></i>
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearTodos}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default MyTodoApp;
