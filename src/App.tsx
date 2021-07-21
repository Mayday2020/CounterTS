import React, {useState} from 'react';
import './App.css';
import {Count} from "./components/Count";
import {Set} from "./components/Set";
import s from './components/counter.module.css'

export type StateType = {
    max: number,
    start: number
}

function App() {
    let state = {
        max: 5,
        start: 0
    }
    let [stateObj, setState] = useState<StateType>(state)
    let [counter, setCounter] = useState<number>(stateObj.start);

    const inc = () => counter < stateObj.max ? setCounter(+counter + 1) : setCounter(counter)
    const reset = (start: number) => setCounter(start)
  return (
    <div className="App">
        <div className={s.wrapper}>
            <Count inc={inc} counter={counter} reset={reset} stateObj={stateObj}/>
            <Set state={stateObj} setState={setState} reset={reset}/>
        </div>
    </div>
  );
}

export default App;
