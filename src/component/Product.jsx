import React, { useEffect, useState } from 'react'


export const Product = () => {
    const [product, setProduct] = useState([]);

    const [isloading, setIsloading] = useState(true);
    const [count, setcount] = useState(1);

    const fetchProduct = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data)
                setIsloading(false)
            })
    }

    useEffect(() => {
        fetchProduct()
    }, [count])


    return (
        <div>
            {isloading && <button onClick={() => setcount(count + 1)}>Reload Product</button>}

            <h2>{isloading && 'Product is loading....'}</h2>
            <div>
                {product ? product.map((product, i) => (
                    <ul style={{ border: "thin solid black", margin: "10px" }} key={i}><li>{product.title}</li>
                        <li>{product.description}</li>
                    </ul>
                )) : <h2>Fail to fetch product</h2>}
            </div>


        </div>
    )
}
