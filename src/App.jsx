import React, {useState, useEffect} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';
import { useTodo, useInput, useFiltered, useStatus } from './components/contexts/';

function App() {
  // const [inputText, setInputText] = useState('');
  // const [todos, setTodos] = useState([]);
  // const [filteredTodos, setFilteredTodos] = useState([]);
  // const [status, setStatus] = useState('all');

  const { inputText, setInputText } = useInput();
  const { todos, setTodos } = useTodo();
  const { filteredTodos, setFilteredTodos } = useFiltered();
  const { status, setStatus } = useStatus();

  function filterHandler() {
    // check the state of the status - conditional that checks the status
    // if status is completed then filter out all of the uncompleted todos
    // if the status is uncompleted then filter out all of the completed todos
    // if all -> return everything
    if (status === 'Completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true));
    } else if (status === 'Uncompleted'){
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      } else {
      setFilteredTodos(todos)
    }
  }

  useEffect(() => {
    filterHandler()
  }, [status, todos])

  return (
      <div>
        <header>Mel's Todo List</header>
        <TodoForm />
        <TodoList />
      </div>
  );
}

export default App;
