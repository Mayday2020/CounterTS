import React from "react";
import s from './counter.module.css'
import {StateType} from "../App";

type CountPropsType = {
    counter: number
    inc: ()=>void
    reset: (start: number)=>void
    stateObj: StateType
}
export function Count(props: CountPropsType) {
    return (

            <div>
                <div className={s.countBlock}>
                    <div className={s.counterBlockChild}>
                        <span className={props.counter === 5 ? s.countNumberMax : s.countNumber}>{props.counter}</span>
                    </div>
                    <div className={s.counterBlockChild}>
                        <button disabled={props.counter === props.stateObj.max}
                                className={s.button}
                                onClick={props.inc}>inc</button>
                        <button disabled={props.counter < 1}
                                className={s.button}
                                onClick={()=>{props.reset(props.stateObj.start)}}>reset</button>
                    </div>
                </div>

            </div>

    )
}