import TodoForm from './components/TodoForm';
import './index.css'
import Pomodoro from './components/Pomodoro'


export default function App(){


  return (
  <>
  <div >
  <TodoForm className='form' />
  <Pomodoro />
  </div>
  </>
  );
}
