import React from 'react'

const Carousel = () => {
    return (
        <div>
            <section className="bg-blue-50 text-center mb-12 p-10 rounded-xl pb-20">
                <h2 className="text-2xl font-bold mb-10">The Linkify Connections Platform</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <img
                            src="/images/carousel/url-shortner-image.png"
                            alt="URL Shortener"
                            className="w-full h-48 object-cover mb-6 rounded-xl"
                        />
                        <h3 className="text-xl font-bold mb-4">URL Shortener</h3>
                        <p>Shorten links and track their performance. Manage your URLs.</p>
                        <button
                            className="bg-blue-500 mt-1 p-2 rounded-xl font-inter inline-block w-full"
                            onClick={() => (window.location.href = '/signup')}
                        >
                            Let's Get Started
                        </button>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <img
                            src="/images/carousel/qr-code-scaning.jpg"
                            alt="QR Codes"
                            className="w-full h-48 object-cover mb-6 rounded"
                        />
                        <h3 className="text-xl font-bold mb-4">QR Codes</h3>
                        <p>Create and manage QR codes for your business. Track scans and interactions.</p>
                        <p className="bg-blue-500 mt-1 p-2 rounded-xl font-inter">Coming soon</p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <img
                            src="/images/carousel/analytics.png"
                            alt="Landing Pages"
                            className="w-full h-48 object-cover mb-6 rounded-xl"
                        />
                        <h3 className="text-xl font-bold mb-4">Real Time Analytics</h3>
                        <p>Monitor user interactions and performance with real-time analytics.</p>
                        <button
                            className="bg-blue-500 mt-1 p-2 rounded-xl font-inter inline-block w-full"
                            onClick={() => (window.location.href = '/signup')}
                        >
                            Let's Get Started
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 text-center mb-12 p-10 rounded-xl pb-20">
                <h2 className="text-2xl font-bold mb-10">Join us on our journey to simplify your digital connections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                    <div className="bg-blue-500 p-8 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold mb-4">500+</h3>
                        <p>Early Adopters</p>
                    </div>
                    <div className="bg-blue-500 p-8 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold mb-4">1K+</h3>
                        <p>Links Shortened</p>
                    </div>
                    <div className="bg-blue-500 p-8 shadow-lg rounded-lg">
                        <h3 className="text-xl font-bold mb-4">5K+</h3>
                        <p>Clicks and Scans</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Carousel