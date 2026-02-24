import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { publicUrl } from '../api/api';
import './Login.css';
import { userContext } from '../context/context';

const LOGIN_ENDPOINT = import.meta.env.VITE_LOGIN_ENDPOINT || 'auth/login';

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { setUser, login } = useContext(userContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.email.trim() || !formData.password.trim()) {
            setError('Email and password are required.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) return;

        setLoading(true);


        try {
            const response = await publicUrl.post(LOGIN_ENDPOINT, {
                email: formData.email.trim(),
                password: formData.password,
            });

            // console.log("here is response", response.data.user);


            const token =
                response.data.token ||
                response?.data?.accessToken ||
                response?.data?.jwt ||
                '';
            const user = response?.data?.user
            login({ user, token })


            // setUser(response.data.user)
            setSuccess('Login successful. Redirecting...');

            navigate("/")



        } catch (err) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                'Login failed. Please check your credentials and try again.';
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
                    <h1>Sign in to your account</h1>
                    <p>
                        Use your email and password to continue to your dashboard.
                    </p>
                </div>

                <form className="login-card" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />

                    {error && <p className="login-message error">{error}</p>}
                    {success && <p className="login-message success">{success}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </section>
    );
};
