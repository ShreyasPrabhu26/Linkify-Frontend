import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email and password are required.');
        } else {
            setError(null);
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include'
                };

                const signinResponse = await fetch('http://localhost:8000/user', requestOptions);

                if (!signinResponse.ok) {
                    const errorData = await signinResponse.json();
                    setError(errorData.error || 'An error occurred. Please try again.');
                } else {
                    const loginResponse = await fetch('http://localhost:8000/user/login', requestOptions);
                    if (!loginResponse.ok) {
                        const errorData = await loginResponse.json();
                        setError(errorData.error || 'An error occurred. Please try again.');
                    } else {
                        navigate('/');  // Redirect to home on successful login // Redirect to home on successful login
                    }
                }
            } catch (err) {
                setError('Failed to connect to the server. Please try again later.');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Side */}
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex justify-center mb-8">
                        <img src="/images/logo/logo-color.svg" alt="Logo" className="w-20 rounded-xl" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Welcome to Linkify</h2>
                    <p className="text-gray-600 mb-6">Sign In into your account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-500 text-white py-2 px-4 rounded mb-4">
                                <strong>{error}</strong>
                            </div>
                        )}

                        <div className="mb-6 flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <button onClick={() => navigate("/login")} className="text-blue-600 hover:underline">
                            Already a user? Log in here
                        </button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full md:w-1/2 bg-blue-500">
                    <img src="/images/login-signin.jpg" alt="Placeholder Image" className="object-cover h-full w-full" />
                </div>
            </div>
        </div>
    );
};

export default LogIn;
