import React, { useState } from 'react'
import { UpdateProduct } from './UpdateProduct';

export const ProductDetailes = () => {
    const [toggle, setToggle] = useState(false);

    const [item, setItem] = useState(() => {
        const product = localStorage.getItem('product')
        return JSON.parse(product)
    })
    // console.log(item);

    return (
        <>
            <div>productDetailes</div>
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <button onClick={() => setToggle(true)}>Edit</button>
                <button>delete</button>
            </div>

            {toggle && <UpdateProduct setToggle={setToggle} item={item} setItem={setItem} />}




        </>


    )
}
