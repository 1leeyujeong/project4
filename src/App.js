import './App.css';
import TodoBoard from './TodoBoard';
import {useState} from 'react';

function App() {
  const [inputValue, setinputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = ()=>{
    setTodoList([...todoList, inputValue])
  }

  return (
    <div className="App">
      <input onChange={
        (e)=>{
          setinputValue(e.target.value)
        }
      } value={inputValue}/>
      <button onClick={addItem}>버튼</button>
      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
