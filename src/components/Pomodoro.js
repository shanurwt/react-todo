import Timer from './Timer'
import Settings from './Settings'
import  {useState} from 'react';
import SettingsContext from './SettingsContext';


export default function Pomodoro() {
  const [showSettings, setShowSettings] = useState(false) // to show the settings menu 
  const [workMinutes, setWorkMinutes] = useState(45); // initial work and break minutes
  const [breakMinutes, setBreakMinutes] = useState(15);
  
  return(
  <div className='container' >
    {/* Provider component comes with every Context Object, 
    The value prop is passed so that the descendants of this Provider can 
    consume all the values. 
    Whenever Provide value prop changes the Descendants will re-render*/}
    <SettingsContext.Provider value={{ 
      // All global values of Pomodoro tree
      workMinutes,
      breakMinutes,
      setWorkMinutes,
      setBreakMinutes,
      showSettings,
      setShowSettings,
    }}>
    {showSettings ? <Settings /> : <Timer />}
    </SettingsContext.Provider>
  </div>
  );
}


