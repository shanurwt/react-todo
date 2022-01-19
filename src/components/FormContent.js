import { useCallback } from "react";
import '../index.css';

export default function FormContent(props){
    const formSubmit = useCallback(
        (event) => {
        event.preventDefault();
        if (!props.newTodo.trim()) return;
        props.setTodoList([{
          id:props.todoList.length ? props.todoList[0].id+1: 1,
          content: props.newTodo,
          done: false,
        }, ...props.todoList]);
        props.setNewTodo('');
    },[props]);

    const done= useCallback(
        (tod,ind) => (event) => {
        const newTodos = [...props.todoList];
        newTodos.splice(ind, 1, {
            ...tod,
            done:!tod.done
        });
        props.setTodoList(newTodos);
    },[props])

    return(
        <>
            <form className="form" onSubmit={formSubmit}>
                <label htmlFor="">Enter a Fresh TODO</label>
                <input type="text" value={props.newTodo} onChange={(e)=> props.setNewTodo(e.target.value)}/>
            </form>

            <ul className="list">
                {props.todoList.map((tod,ind) => (
                    <li className="l-items" key={tod.id}>
                         <input type="checkbox" checked={tod.done} onChange={done(tod,ind)}/> 
                         <span className={tod.done?'done':''}>{tod.content}</span>
                         </li>
                ))}
            </ul>
        </>
    );
}