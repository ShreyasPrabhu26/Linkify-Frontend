import React, { useEffect, useState } from 'react';
import ShortenUrlForm from "../components/ShortenUrlForm";
import UrlList from '../components/UrlList';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [allUrlInformation, setAllUrlInformation] = useState([]);

    useEffect(() => {
        const getAllUrlInfo = async () => {
            try {
                const access_token = localStorage.getItem("access-token");

                if (!access_token) {
                    navigate("/login");
                }

                const allUrlResponse = await fetch('https://linkify-api.shreyas.info/api/v1/url/allUrlInfo', {
                    headers: {
                        "Authorization": `Bearer ${access_token}`
                    }
                });

                if (!allUrlResponse.ok) {
                    console.error('Failed to fetch URL information:', allUrlResponse.statusText);
                } else {
                    const data = await allUrlResponse.json();
                    setAllUrlInformation(data);
                }
            } catch (error) {
                console.error('Failed to fetch URL information:', error);
            }
        };

        getAllUrlInfo();
    }, []);

    return (
        <div>
            <ShortenUrlForm />
            <UrlList allUrlInformation={allUrlInformation} />
        </div>
    );
};

export default Dashboard;