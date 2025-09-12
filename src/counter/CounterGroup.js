import {Counter} from "./Counter";
import {CounterContext} from "../App";
import { useState, useContext } from "react";

// export const CounterContext = createContext();

export function CounterGroup(props) {
    const {count} = useContext(CounterContext);
    const [counterSize,setCounterSize] = useState(count);
    return <div>
        {
            new Array(counterSize).fill(1).map((value, index) => {
                return <Counter key={index}/>
            })
        }
    </div>;
}