import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import SettingsButton from './SettingsButton'
import {useContext , useState, useEffect, useRef} from 'react'
import SettingsContext from './SettingsContext';

// color for work and break minutes
const red='#f54e4e';
const green = '#4aec8c';


function Timer() {
    const settingsInfo = useContext(SettingsContext);
  
    const [isPaused, setIsPaused] = useState(true); // for pause and play button
    const [mode, setMode] = useState('work'); // mode for work and break minutes
    const [secondsLeft, setSecondsLeft] = useState(0); // to show the seconds repeat after 60


    // using useRef hook because it doesn't re-render after change and 
    // useRef returns an object {current:0} ;;is set to 0 if initial vale is 0
    // we can only access current value of useRef
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    const secondsLeftRef = useRef(secondsLeft);
  
    // after every 1 second decrease the secondsLeft by 1 and don't re-render
    function tick() {
      setSecondsLeft(secondsLeftRef.current--);
    }

    // with useEffect Hook we can perform side effects
    // similar to componentDidMount and componentDidUpdate
    // the function (aka 'effect') we have passed inside useEffect is called after performing Dom updates.
    // if effect function returns function, React will run it when it's time to cleanup

    useEffect(() => {

        // this function will switch the mode from work to break and vice versa
        // it will also set the nextSeconds
        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
      
            setMode(nextMode);
            modeRef.current = nextMode;
      
            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
          }
      
          secondsLeftRef.current = settingsInfo.workMinutes * 60;
          setSecondsLeft(secondsLeftRef.current);

          // The setInterval() method calls a function at specified intervals (in milliseconds).
          // The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
          // 
          
          const interval = setInterval(() => {

            // if the PausedRef is true it will return nothing from function 
            if (isPausedRef.current) {
              return;
            }

            // if secondsLeft becomes 0 then it will switch the mode

            if (secondsLeftRef.current === 0) {
              return switchMode();
            }
      
            tick();
          },1000);
          
        // cleanup function (it will clean )
        return () => clearInterval(interval);

        // settingsInfo is second argument of useEffect (an array)
        // second argument is an array
        // if settingsInfo got changed the useEffect will run
    }, [settingsInfo]);

    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = '0'+seconds;
    
    return (
        <div className="">
          {/* The round progress bar from package */}
            
            <CircularProgressbar
                value={percentage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                textColor:'#fff',
                pathColor:mode === 'work' ? red : green,
                tailColor:'rgba(255,255,255,.2)',
            })} />

            {/* Inside div Play/Pause button and setting button */}
            <div className="">

              {/* If is Paused is true then show PlayButton otherwise show PauseButton */}

              {/* used Ref.current because if useState change it will lead to re-render and we only want to change the button */}
              {isPaused
                  ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
                  : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
            </div>

            {/* SettingsButton show the setting and change the value of setShowSettings (a global variable of context api) */}
            <div className="">
              <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div> 
            
        </div>
    );
}

export default Timer;