import { useTodo, useInput, useStatus } from '../../components/contexts/';

function TodoForm() {

  const { inputText, setInputText } = useInput();
  const { status, setStatus } = useStatus();

  const { todos, setTodos } = useTodo();
  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
     ...todos,
     {text: inputText, completed: false}
    ])
    setInputText('')
  }

  function handleStatus(e) {
    setStatus(e.target.value)
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputText} type="text" className="todo-input" onChange={handleInput} />
      <button type="submit" className="todo-button">Add</button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus} >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default TodoForm;