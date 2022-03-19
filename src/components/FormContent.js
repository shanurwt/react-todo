import { useCallback, useEffect, useRef } from "react";
import {gsap} from "gsap";
import '../index.css';


export default function FormContent(props){
    // lol is a ref and can be used t target DOM elements
    const lol = useRef();
    // useEffect will render when todo are added in todoList
    useEffect(()=>{
        // timeline can be added with .from and .to
        // .from and .to takes 2 parameters a ref(Dom element) and effects/changes
        gsap.timeline()
        .from(lol.current, {
            x:80,
            ease:"back",
            duration:1,
        });
    },[props.todoList])

    // useCallback returns a memoized callback
    // useMemo returns a memoized value
    // useCallBack gives referential equality between renders for functions
    // useMemo gives  referential equality between renders for values
    // useCallBack returns  function uncalled so you can call it later
    // useMemo calls its function and returns the result.

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
        newTodos.splice(ind, 1);
        props.setTodoList(newTodos);
    },[props])

    return(
        <>
            <form className="form" onSubmit={formSubmit}>
                <label >Enter a Fresh TODO</label>
                <input type="text" value={props.newTodo} onChange={(e)=> props.setNewTodo(e.target.value)}/>
            </form>

            <ul className="list" >
                {props.todoList.map((tod,ind) => (
                    <li className="l-items" key={tod.id} ref={lol}>
                        <input type="checkbox" checked={tod.done} onChange={done(tod,ind)}/>
                        <span className={tod.done?'done':''}>{tod.content}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}