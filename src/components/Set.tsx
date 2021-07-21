import React, {ChangeEvent, useState} from "react"
import s from './counter.module.css'
import {StateType} from "../App";

type SetPropsType = {
    state: StateType
    setState: (state: StateType)=>void
    reset: (start: number)=>void
}

export function Set(props: SetPropsType){
    let [start, setStart] = useState(props.state.start)
    let [max, setMax] = useState(props.state.max)
    let setButtonFunction = () => {
        props.setState({max: max, start: start})
        props.reset(start)
    }

    return (
        <div>
            <div className={s.countBlock}>
                <div className={s.counterBlockChild}>
                    <div>
                        <span>MAX VALUE</span>
                        <input type="number"
                               value={max}
                               onFocus={(e:ChangeEvent<HTMLInputElement>)=>{e.target.value = ''}}
                               onChange={(e:ChangeEvent<HTMLInputElement>)=>{setMax(+e.target.value)}}/>
                    </div>
                    <div>
                        <span>START VALUE</span>
                        <input type="number"
                               value={start}
                               onFocus={(e:ChangeEvent<HTMLInputElement>)=>{e.target.value = ''}}
                               onChange={(e:ChangeEvent<HTMLInputElement>)=>{setStart(+e.target.value)}}/>
                    </div>
                </div>
                <div className={s.counterBlockChild}>
                    <button className={s.button} onClick={setButtonFunction}>
                        set
                    </button>
                </div>
            </div>
        </div>
    )
}