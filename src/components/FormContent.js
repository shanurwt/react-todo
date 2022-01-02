import { useCallback } from "react";

export default function FormContent(props){
    const formSubmit = useCallback(
        (event) => {
        event.preventDefault();
        if (!props.newTodo.trim()) return;
        props.setTodoList([{
          id:props.todoList.length ? props.todoList[0].id+1: 1,
          content: props.newTodo,
        }, ...props.todoList]);
        props.setNewTodo('');
    },[props]);

    return(
        <>
            <form onSubmit={formSubmit}>
                <label htmlFor="">Enter a Fresh TODO</label>
                <input type="text" value={props.newTodo} onChange={(e)=> props.setNewTodo(e.target.value)}/>
            </form>
        </>
    );
}