import ReactSlider from "react-slider";
import './slider.css'
import SettingsContext from './SettingsContext';
import {useContext} from 'react'
import BackButton from './BackButton'


function Settings(){

    // useContext hook will accept the context object(SettingsContext) and returns current context value
    // value is determined by value props of nearest Context.Provider (SettingsContext.Provider)
    // if nearest Context.Provider updates, hook will re-render with latest value

    const settingsInfo = useContext(SettingsContext); // useContext Hook

    return(
        <div className="">
            <label >work minutes: {settingsInfo.workMinutes}:00</label>
            {/* React Slider will provide a slider to set minutes of Work*/}

            <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue=> settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />

            <label >break minutes: {settingsInfo.breakMinutes}:00</label>

            {/* Slider for break Minutes*/}
            <ReactSlider
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue=> settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <BackButton onClick={ ()=> settingsInfo.setShowSettings(false)} />
        </div>
    )
}
export default Settings;