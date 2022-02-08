import TodoForm from './components/TodoForm';
import './index.css'
import Pomodoro from './components/Pomodoro'
import { useState } from 'react';

export default function App(){

const [tick, setTick] = useState(true);
  return (
  <>
  <div >

    <button onClick={()=>{setTick(false)}}>Pomodoro</button>
    <button onClick={()=>{setTick(true)}}>Todo</button>
      {tick && <TodoForm className='form' /> }
      {!tick && <Pomodoro /> }

  </div>
  </>
  );
}
