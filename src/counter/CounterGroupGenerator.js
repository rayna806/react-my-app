import {useContext} from "react";
import {CounterContext} from "../App";

export function CounterGroupGenerator(props) {
    const{state,dispatch}=useContext(CounterContext);

    function updateSizer(event) {
        // console.log(event.target.value);
        // console.log(typeof event.target.value);
        let number = parseInt(event.target.value);
        if (!Number.isNaN(number)) {
            // props.onUpdateSize(number);
            dispatch({
                type:"UPDATE_SIZE",
                payload:{number:number}
            })
        }
    }

    function reset() {

        dispatch({
            type:"RESET",
        })
    }

    return <div>
        size:
        <input type={"number"}
               value={props.counterSize || 0}
               onChange={updateSizer}
        />
        <button onClick={reset}>Reset</button>

    </div>;
}