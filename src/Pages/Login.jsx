import React from 'react'
import { useNavigate } from 'react-router'

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        console.log('hello user');

        navigate("/user/4")

    }
    return (
        <div>
            <label htmlFor="">Name</label><br />
            <input type="text" name="" id="" /><br />
            <label htmlFor="">Password</label><br />
            <input type="password" name="" id="" /><br />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
