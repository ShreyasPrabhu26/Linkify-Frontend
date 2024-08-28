import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <header className="bg-blue-600 text-white py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex justify-center items-center align-center gap-5 md:pl-0">
                    <img src="/images/logo/logo-color.svg" alt="Logo" className="w-16 md:w-20 rounded-xl" />
                    <h1 className="text-3xl font-bold">Welcome to Linkify</h1>
                </div>
                <div className="hidden md:flex gap-3">
                    <a href="https://www.linkedin.com/in/shreyasprabhu26/" target="_blank"
                        className="whitespace-nowrap bg-gray-200 text-gray-900 py-2 px-4 rounded">Contact US</a>
                    {isLoggedIn ? (
                        <>
                            <button onClick={() => navigate('/dashboard')} className="whitespace-nowrap bg-gray-200 text-gray-900 py-2 px-4 rounded">
                                Dashboard
                            </button>
                            <button onClick={handleLogout} className="whitespace-nowrap bg-gray-200 text-gray-900 py-2 px-4 rounded">
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signin" className="whitespace-nowrap block bg-gray-200 text-gray-900 py-2 px-4 rounded">
                                Sign Up
                            </Link>
                            <Link to="/login" className="whitespace-nowrap block bg-white text-blue-600 py-2 px-4 rounded">
                                Login
                            </Link>
                        </>
                    )}
                </div>
                <button onClick={toggleMenu} id="menu-button" className="md:hidden focus:outline-none">
                    <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div id="mobile-menu" className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="https://www.linkedin.com/in/shreyasprabhu26/" target="_blank"
                    className="block bg-gray-200 text-gray-900 py-2 px-4">Contact US</a>
                {!isLoggedIn && (
                    <>
                        <Link to="/signin" className="whitespace-nowrap block bg-gray-200 text-gray-900 py-2 px-4">Sign Up</Link>
                        <Link to="/login" className="whitespace-nowrap block bg-white text-blue-600 py-2 px-4">Login</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
