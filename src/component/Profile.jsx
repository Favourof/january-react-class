/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ArrayList } from './ArrayList';
import { ButtonIncrement } from './ButtonIncrement';

export const Profile = () => {
    // let count = 10
    const [counter, setCounter] = useState(10)
    const [profile, setProfile] = useState({
        name: "favour",
        age: 16
    });
    const [arr, serArr] = useState(["favour", "lola", "ayo", "bolu", "dayo", "dunsin"])

    const increment = () => {


        setCounter(counter + 1)
        console.log(counter);

        // counter + 1
        // console.log(counter++);
    }

    return (
        <div>
            <p>name: {profile.name}</p>
            <p>Age: {profile.age + 2}</p>
            <div>
                <p>Count: {counter}</p>
                <ButtonIncrement props={increment} />

            </div>
            <ArrayList arrList={arr} />
        </div>
    )
}
