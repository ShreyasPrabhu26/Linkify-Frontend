import React, { useState } from 'react';

const ShortenUrlForm = () => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('URL to shorten:', url);
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Enter your URL here"
                    name="redirectURL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 whitespace-nowrap"
                >
                    Shorten URL
                </button>
            </form>
        </section>
    );
};

export default ShortenUrlForm;
