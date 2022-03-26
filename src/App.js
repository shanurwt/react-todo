import TodoForm from './components/TodoForm';
import './index.css'
import Pomodoro from './components/Pomodoro'
import {
  BrowserRouter as Router,
  Routes,Route,
  Link
} from "react-router-dom";


export default function App(){

// const [tick, setTick] = useState(true);
  return (
  <Router >

  <div className='selec-btn'>
    
    <Link to='/todo'> <button >Todo</button> </Link>
    <Link to='/pomodoro'> <button >Pomodoro</button> </Link>
    
  </div>

    <Routes>
      
      <Route path='/todo' element={<TodoForm  />} />
      
      <Route path='/pomodoro' element={<Pomodoro />} />
    
    </Routes>
  
  </Router>
  );
}
