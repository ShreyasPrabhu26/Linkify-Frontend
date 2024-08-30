import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShortenUrlForm = () => {
    const [redirectURL, setRedirectURL] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = localStorage.getItem('access-token');
        if (!accessToken) {
            navigate("/login");
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ redirectURL }),
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/url/shorten', requestOptions);
            const jsonData = await response.json();

            if (!response.ok) {
                setError(jsonData.error || 'An error occurred. Please try again.');
                setSuccess(null);
            } else {
                setSuccess('URL shortened successfully!');
                setError(null);
            }
        } catch (err) {
            setError('Failed to connect to the server. Please try again later.');
            setSuccess(null);
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Enter your URL here"
                    name="redirectURL"
                    value={redirectURL}
                    onChange={(e) => setRedirectURL(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 whitespace-nowrap"
                >
                    Shorten URL
                </button>
            </form>
            {error && (
                <div className='bg-red-500 text-white p-4 rounded-lg mb-4'>
                    <strong>{error}</strong>
                </div>
            )}
            {success && (
                <div className='bg-green-500 text-white p-4 rounded-lg mb-4'>
                    <strong>{success}</strong>
                </div>
            )}
        </section>
    );
};

export default ShortenUrlForm;
