import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section className="bg-blue-50 text-center mb-12 p-10 rounded-xl pb-20">
                <h2 className="text-2xl font-bold mb-6">What our customers are saying</h2>
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <blockquote className="text-base md:text-lg mb-6">
                        <p>
                            "Choosing Linkify for generating our shortened URLs was an easy decision for our team. We love its reliability and ease of use."
                        </p>
                    </blockquote>
                    <p className="font-bold">Alex Johnson</p>
                    <p>Marketing Specialist</p>
                </div>
            </section>
        </div>
    )
}

export default Testimonials