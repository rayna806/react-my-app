import './App.css';
import {createContext, useContext, useReducer, useState} from "react";
import {Counter} from "./counter/Counter";
import {CounterGroupGenerator} from "./counter/CounterGroupGenerator";
import {CounterGroup} from "./counter/CounterGroup";
// export const counterContext=createContext();


export const CounterContext = createContext();
export const initState = {
    count: 4
};

function MultipleCounter() {
    const {state,dispatch} = useContext(CounterContext)
    // const [counterSize, setCounterSize] = useState(state.count);
    return <div>
        Answer 8 exercise-MultipleCounter
        <CounterGroupGenerator counterSize = {state.count}/>
        <CounterGroup counterSize={state.count}/>

    </div>
}


function counterReducer(state, action) {

    // console.log(statr,action)
    switch (action.type){
        case "UPDATE_SIZE":
            return{count: action.payload.number}
        case "RESET":
            return {count:0};
        default:
            return state;
    }

}

function App() {

    const [state, dispatch ]= useReducer(counterReducer,initState);
    return (
        <div className="App">
            {/*<Counter />*/}
            <CounterContext.Provider value={{
                state:state,
                dispatch:dispatch}}>
                <MultipleCounter />
            </CounterContext.Provider>
        </div>
    );
}

export default App;
