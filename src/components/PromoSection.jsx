import React from 'react';

const PromoSection = () => {
    return (
        <div className="p-10 text-center mb-12 flex flex-col justify-center border border-gray-300 shadow-lg rounded-lg bg-indigo-900">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">"Simplify Your Links, Amplify Your Insights."</h1>
            <p className="md:text-lg mb-6 text-white">
                Use our URL shortener to engage your audience and connect them to the right information.
                Build, edit, and track everything inside the Linkify Connections Platform.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get started for free
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    API-DOCS
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Run in Postman
                </button>
            </div>
        </div>
    );
};

export default PromoSection;
