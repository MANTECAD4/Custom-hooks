import { useState } from "react"


export const useCounter = ( initialState : number = 1) => {

    const [counter, setCounter] = useState(initialState);

    const onIncrement = ( value:number = 1 ):void => {
        setCounter( (current) => current + value );
    }

    const onDecrement = ( value:number = 1):void => {
        if (counter <= 1) return;
        setCounter( (current) => current - value );
    }

    const onReset = ():void => {
        setCounter( initialState );
    }

    return {
        counter,
        onDecrement,
        onIncrement,
        onReset,
    }
}