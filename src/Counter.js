import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);
    const styleButton = {
        border: "1px solid red"
    }
    const onIncrease = () => {
        setNumber(preNumber => (preNumber + 1));
    };
    const onDecrease = () => {
        setNumber(preNumber => (preNumber - 1));

    };
    return (
        <>
            <div>{number}</div>
            <button style={styleButton} onClick={onIncrease}>+1</button>
            <button style={styleButton} onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter