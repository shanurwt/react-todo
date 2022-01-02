import { useState} from 'react';
import List from './List'
import FormContent from './FormContent';

export default function TodoForm() {
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    return (
        <>
        <h1>TODO App</h1>
        <FormContent todoList={todoList} newTodo={newTodo} setNewTodo={setNewTodo} setTodoList={setTodoList}/>
        <List list={todoList}/>
        </>
    );
}