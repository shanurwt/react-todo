import TodoForm from './components/TodoForm';
import './index.css'
import Pomodoro from './components/Pomodoro'
import { useState } from 'react';

export default function App(){

const [tick, setTick] = useState(true);
  return (
  <>
  <div >

    <button onClick={()=>{setTick(false)}}>Todo</button>
    <button onClick={()=>{setTick(true)}}>Pomodoro</button>
      {tick && <TodoForm className='form' /> }
      {tick===false && <Pomodoro /> }

  </div>
  </>
  );
}
