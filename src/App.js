import { useState, useCallback} from 'react';
import List from './components/List'
export default function App(){
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const formSubmit = useCallback(
    (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodoList([{
      id:todoList.length ? todoList[0].id+1: 1,
      content: newTodo,
    }, ...todoList]);
    setNewTodo('');
  },[todoList, newTodo]);


  return (
  <>
  <h1>TODO App</h1>
  <form onSubmit={formSubmit}>
    <label htmlFor="">Enter a Fresh TODO</label>
    <input type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
  </form>
  <List list={todoList}/>
  </>
  );
}
