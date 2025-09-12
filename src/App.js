import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Counter() {
    const [num,setNum] = useState(5);


    function add(){
        setNum(num+1)
    }
    function sub(){
        setNum(num-1)
    }
    return <div>
        <button onClick={add}>+</button>
        {num}
        <button onClick={sub}>-</button>
    </div>
}
    function CounterGroup(props) {

        return <div>
            {
                new Array(props.counterSize).fill(1).map((value,index) =>{
                    return <Counter key={index} />
                })
            }
        </div>;
    }

    function CounterGroupGenerator(props) {
        function updateSizer(event) {
            console.log(event.target.value);
            console.log(typeof event.target.value);
            let number= parseInt(event.target.value);
            if(!isNaN(number)){
                props.onUpdateSize(number);
            }
        }

        function reset() {
            props.onUpdateSize(0);
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

    function MultipeCounter() {
        const [counterSize,setCounterSize] = useState(3);
        return <div>
            <CounterGroupGenerator counterSize={counterSize}
                                   onUpdateSize={setCounterSize}

            />
            <CounterGroup counterSize={counterSize} />

        </div>
    }



function App() {
  return (
    <div className="App">
            <MultipeCounter />
            <Counter />

    </div>
  );
}

export default App;
