import React, { useEffect, useState } from 'react';
import './Product.css';
import { publicUrl } from '../api/api';

export const Product = () => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProduct = async () => {
        setIsLoading(true);
        setError('');
        const baseURL = import.meta.env.BASEURL;
        console.log(baseURL);


        try {
            // const response = await axios.get('http://localhost:4001/product');
            const response = await publicUrl.get("/product")
            const result = response?.data?.product || [];
            setProduct(result);
        } catch (error) {
            console.log(error);

            setProduct([]);
            setError('Unable to load products right now. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <section className="product-page">
            <div className="product-hero">
                <p className="product-badge">Catalog</p>
                <h1>Discover Products</h1>
                <p className="product-subtitle">
                    Curated items with clean details for quick browsing.
                </p>

                <div className="product-actions">
                    <button className="product-btn" onClick={fetchProduct} disabled={isLoading}>
                        {isLoading ? 'Refreshing...' : 'Refresh Products'}
                    </button>
                    <span className="product-count">
                        {product.length} {product.length === 1 ? 'item' : 'items'}
                    </span>
                </div>
            </div>

            {isLoading && (
                <div className="product-grid">
                    {[...Array(6)].map((_, i) => (
                        <article className="product-card skeleton" key={i}>
                            <div className="skeleton-line skeleton-title"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                        </article>
                    ))}
                </div>
            )}

            {!isLoading && error && (
                <div className="product-status error">
                    <h2>Could not fetch products</h2>
                    <p>{error}</p>
                </div>
            )}

            {!isLoading && !error && product.length === 0 && (
                <div className="product-status empty">
                    <h2>No products found</h2>
                    <p>Try refreshing the list to check again.</p>
                </div>
            )}

            {!isLoading && !error && product.length > 0 && (
                <div className="product-grid">
                    {product.map((item, i) => (
                        <article className="product-card" key={item.id || i}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};
