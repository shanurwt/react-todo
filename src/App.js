import {useState , useCallback, useEffect} from 'react'


function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodo = useCallback( (event) => {
      setNewTodo(event.target.value);
    },[]);

  const formSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!newTodo.trim()) return;
      setTodos([
         {
          id: todos.length ? todos[0].id + 1 : 1,
          content: newTodo,
          done: false,
        }, ...todos
      ]);
      setNewTodo('');
    },
    [todos, newTodo]
  )

useEffect(() => {
  console.log(todos)
}, [todos]);

const addTodo = useCallback((todo, index) => (e)=>{
  const newTodos = [...todos];
  newTodos.splice(index,1,{
    ...todo,
    done:!todo.done
  });
  setTodos(newTodos);
}, [todos]);

const removeTodo = useCallback((todo) => (event) =>{
  setTodos(todos.filter(otherTodo => otherTodo !== todo));
}, [todos]);


const markAllDone= useCallback(() => {
  const updatedTodos = todos.map(todo => {
    return {
      ...todo,
      done:true,
    };
  });
  setTodos(updatedTodos);
}, [todos]);

  return (
    // <> </> is the jsx fragments used to wrap the data inside one element. 
    <> 
      <form onSubmit={formSubmit}>
        <label htmlFor="newTodo">Enter a Todo:</label>
        <input type="text" value={newTodo} onChange={onNewTodo} />
        <button>Add Todo</button>
      </form>
      <button onClick={markAllDone}>Mark All Done</button>
      <ul>
        {todos.map((todo, index)=> (
          <li key={todo.id} >
            <input checked={todo.done} type="checkbox" onChange={addTodo(todo, index)}/>
              <span className={todo.done? 'done':''}>{todo.content}</span>
              <button onClick={removeTodo(todo)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
