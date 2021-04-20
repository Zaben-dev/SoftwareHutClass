import React, {useState} from "react";

interface CounterProps{
    initialNumber?: number;
    onNumberChange?: (someNumber: number)=>void;
}

const Counter:React.FC<CounterProps> = ({initialNumber, onNumberChange}) =>{
    // const liczba = 10;
    const [counterNumber , setCounterNumber] = useState(initialNumber || 0);


    const handleAdd = ()=>{
        const number = counterNumber +1;
        setCounterNumber(counterNumber+1);
        // if(onNumberChange)
        // {
        //     onNumberChange(number)
        // }
        onNumberChange && onNumberChange(number)
    }

    const handleDecrease = () =>{
        const number = counterNumber -1;
        setCounterNumber(counterNumber-1);
        onNumberChange && onNumberChange(number)
    }
    return (
        <div>
            <button onClick={handleAdd}>+</button>
            {counterNumber}
            <button onClick={handleDecrease}>-</button>
        </div>
    );
}

export default Counter;