import { useState} from 'react';
import FormContent from './FormContent';
import '../index.css'

export default function TodoForm() {
    // newTodo state holds the newTodo which has to be added in the todoList
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    return (
        <>
        <div className="container" >
        <h1 className='head' >TODO App</h1>
        <FormContent  todoList={todoList} newTodo={newTodo} 
        setNewTodo={setNewTodo} setTodoList={setTodoList}/>
        </div>
        </>
    );
}