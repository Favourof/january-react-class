import React, { useContext } from 'react'
import Navbar from '../component/Navbar'
import { Timer } from '../component/Timer'
import { Product } from '../component/Product'
import { userContext } from '../context/context'

export const Home = () => {
    const { user, setUser } = useContext(userContext)

    // user = 'bola'
    // setUser(isUser)
    return (
        <div>
            <h1>Hello {user.username}</h1>
            <h1>THis is the home Page</h1>
            {/* <Timer /> */}
            <Product />
        </div>
    )
}
