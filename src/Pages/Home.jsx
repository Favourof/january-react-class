import React from 'react'
import Navbar from '../component/Navbar'
import { Timer } from '../component/Timer'
import { Product } from '../component/Product'

export const Home = () => {
    return (
        <div>
            <h1>THis is the home Page</h1>
            {/* <Timer /> */}
            <Product />
        </div>
    )
}
