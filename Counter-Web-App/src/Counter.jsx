import React, { useState } from 'react';
const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h1>{count}</h1>
            <button onClick={handleIncrement} style={{ margin: '10px', padding: '10px 20px' }}>Increment</button>
            <button onClick={handleDecrement} style={{ margin: '10px', padding: '10px 20px' }}>Decrement</button>
        </div>
    );
};

export default Counter;