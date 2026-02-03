import React, { useEffect, useState } from 'react'

export const Timer = () => {

    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [increment]);
    return (
        <div>
            I've rendered {count} times!
            <button onClick={() => setIncrement(increment + 1)}>Re-Render{increment} </button>
        </div>
    )
}
