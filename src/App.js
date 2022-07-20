import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = () => {

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
      <ToDoForm />
      {todos.map(() => {
        return (
          <ToDo
          key={todos.id}
          />
        )
      })}


    </div>
  );
}

export default App;
