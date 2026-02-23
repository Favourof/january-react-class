import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { privateUrl } from '../api/api';
import './Login.css';
import { usePreviewImage } from '../hooks/usePreviewImage';

const LOGIN_ENDPOINT = import.meta.env.VITE_LOGIN_ENDPOINT || 'product';

export const AddProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', description: '', category: '', price: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const formDatas = new FormData()
    const { imageFile, preview, handleFileChange } = usePreviewImage()





    const handleChange = (e) => {


        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(imageFile, 'from custom hook');

        setError('');
        setSuccess('');


        setLoading(true);
        formDatas.append("title", formData.title.trim())
        formDatas.append("description", formData.description.trim())
        formDatas.append("category", formData.category)
        formDatas.append("price", formData.price)
        if (imageFile) formDatas.append("image", imageFile)

        try {
            const response = await privateUrl.post(LOGIN_ENDPOINT, formDatas);
            console.log(response);
            setSuccess('Product Added successful. Redirecting...');

            navigate("/")

        } catch (err) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                'Error place try again later';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="login-page">
            <div className="login-wrap">
                <div className="login-intro">
                    <p className="login-kicker">Welcome Back</p>
                    <h1>Add product</h1>
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
                        type="file"
                        accept='image/*'
                        onChange={handleFileChange}
                        autoComplete="current-image"
                    />
                    {imageFile && <img src={preview} style={{ width: "100%" }} />}

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
    );
};
