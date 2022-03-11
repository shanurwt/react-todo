import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'



function Timer(){
    const red='#f54e4e';
    // const green = '#4aec8c';
    return (
        <div className="">
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor:'#fff',
                pathcolor: red,
                tailcolor:'rgba(255,255,255,.2)',
                rotation: 0.4,
            })}/>
            <div className="">
            <PlayButton className='play-btn'/>
            <PauseButton />
            </div>
            
        </div>
    );
}

export default Timer;