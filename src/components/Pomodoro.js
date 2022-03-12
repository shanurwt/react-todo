import Timer from './Timer'
import Settings from './Settings'
import  {useState} from 'react';
import SettingsContext from './SettingsContext';


export default function Pomodoro() {
  const [showSettings, setShowSettings] = useState(true)
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return( 
  <div className='container' >
    <SettingsContext.Provider value={{
      workMinutes: workMinutes,
      breakMinutes: breakMinutes,
      setWorkMinutes,
      setBreakMinutes,
    }}>
    {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
  </div>
  );
}


