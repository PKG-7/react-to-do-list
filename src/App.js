import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = () => {

  }

  const handleToggle = () => {

  }

  return (
    <div className="App">
      <header>
        <h1> Список задач: {todos.length}</h1>
      </header>  
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
          todo={todo}
          key={todos.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )
      })}


    </div>
  );
}

export default App;
