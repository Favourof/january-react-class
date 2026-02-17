/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { privateUrl } from '../api/api';

export const UpdateProduct = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: props.item?.title, description: props.item.description, category: props.item.category, image: props.item.image, price: props.item.price });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // console.log(props.item);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const validateForm = () => {
    //     if (!formData.email.trim() || !formData.password.trim()) {
    //         setError('Email and password are required.');
    //         return false;
    //     }

    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(formData.email)) {
    //         setError('Please enter a valid email address.');
    //         return false;
    //     }

    //     return true;
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        setSuccess('')

        setLoading(true)

        try {
            const res = await privateUrl.put(`product/${props.item._id}`, {
                title: formData.title.trim(),
                description: formData.description.trim(),
                image: formData.image,
                category: formData.category,
                price: formData.price
            })
            if (res) {
                props.setItem(res.data.product)

            }
            console.log(res);

        } catch (err) {
            console.log(err);

            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                'Error place try again later';
            setError(message);
        }
        finally {
            setLoading(false)
            props.setToggle(false)
        }


    };

    return (
        <div style={{ position: "fixed", inset: "50px", backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "2px 2px 10px gray", overflowY: "auto" }}>
            <p onClick={() => props.setToggle(false)} style={{ textAlign: "right", fontSize: "30px", cursor: "pointer" }}>X</p>
            <section className="login-page">
                <div className="login-wrap">
                    <div className="login-intro">
                        <p className="login-kicker">Welcome Back</p>
                        <h1>Update product</h1>
                        <p>
                            Product .........
                        </p>
                    </div>

                    <form className="login-card" onSubmit={handleSubmit}>
                        <label htmlFor="email">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Laptop"
                            value={formData.title}
                            onChange={handleChange}
                            autoComplete="title"
                        />

                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Enter your description"
                            value={formData.description}
                            onChange={handleChange}
                            autoComplete="current-description"
                        />


                        <label htmlFor="category">Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            placeholder="Enter your category"
                            value={formData.category}
                            onChange={handleChange}
                            autoComplete="current-category"
                        />


                        <label htmlFor="image">Image URL</label>
                        <input
                            id="image"
                            name="image"
                            type="text"
                            placeholder="Enter your image"
                            value={formData.image}
                            onChange={handleChange}
                            autoComplete="current-image"
                        />

                        <label htmlFor="price">price</label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            placeholder="Enter your price"
                            value={formData.price}
                            onChange={handleChange}
                            autoComplete="current-price"
                        />

                        {error && <p className="login-message error">{error}</p>}
                        {success && <p className="login-message success">{success}</p>}

                        <button type="submit" disabled={loading}>
                            {loading ? 'Adding Product....' : 'Add product'}
                        </button>
                    </form>
                </div>
            </section>
        </div>

    );
}
