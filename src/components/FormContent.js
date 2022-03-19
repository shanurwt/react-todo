import { useCallback, useEffect, useRef } from "react";
import {gsap} from "gsap";
import '../index.css';


export default function FormContent(props){
    
    // lol is a ref and is used to target DOM elements
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
    },[props.todoList]);

    // useCallback returns a memoized callback
    // useMemo returns a memoized value
    // useCallBack gives referential equality between renders for functions
    // useMemo gives  referential equality between renders for values
    // useCallBack returns  function uncalled so you can call it later
    // useMemo calls its function and returns the result.
    
    const formSubmit = useCallback(
        (event) => {
        //  it will not refresh the page after submitting the form
        event.preventDefault();
        // if newTodo is empty it will return nothing
        if (!props.newTodo.trim()) return
        // adding the new todo in todoList
        props.setTodoList([{
            // if length of array is 0 put the id 1 otherwise +1 of previous
          id: props.todoList.length ? props.todoList[0].id+1: 1,
          content: props.newTodo,
          done: false,
        //   add the rest of todoList after this
        }, ...props.todoList]);
        // make the newTodo empty after submitting
        props.setNewTodo('');
    },[props]);


    const done = useCallback(
        (ind) => () => {
        // copy the todoList in newTodos
        const newTodos = [...props.todoList];
        // splice method overwrites original array
        // splice syntax = array.splice(index, howmany, item1,item2,...)
        //howmany will tell no. of items to remove
        newTodos.splice(ind, 1);
        // update the changed array
        props.setTodoList(newTodos);
    },[props])

    return(
        <>
        {/* when form is submitted formSubmit() is called  */}
            <form className="form" onSubmit={formSubmit}>
                <label >Enter a Fresh TODO</label>
                {/* the value changed on input is stored in newTodo by event.target.value */}
                <input type="text" value={props.newTodo} onChange={(e)=> props.setNewTodo(e.target.value)}/>
            </form>
        {/* to show the list of tasks */}
            <ul className="list" >
                {/* Map object holds key-value pairs and remembers the original order of insertion of keys */}
                {/* Map iterates its element in insertion order, a for...of loop returns an array of [key,value] for each iteration */}
                {/* tod=elements of todoList and ind=index of  */}
                {props.todoList.map((tod,ind) => (
                    // tod.id is used for the key and ref argument is for animation (gsap)
                    <li className="l-items" key={tod.id} ref={lol}>
                        {/* the checkbox to delete elements */}
                        {/* onChange the done function is called and func will make newTodo after deleting it */}
                        <input type="checkbox" checked={tod.done} onChange={done(ind)}/>
                        {/* to show the contents of todoList */}
                        <span >{tod.content}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}