import React, { useEffect, useState } from 'react';
import ShortenUrlForm from "../components/ShortenUrlForm";
import UrlList from '../components/UrlList';
import { useNavigate } from 'react-router-dom';

const allUrlInformation = [
    {
        "_id": "66cf14097c748e0103ed4a7a",
        "shortId": "vvisJ6AwTQ",
        "redirectURL": "www.google.com",
        "createdBy": "66cf11c681bcf5d0045ac1fb",
        "visitHistory": [
            {
                "timestamp": "August 28, 2024 at 12:14:01 PM UTC",
                "ip_address": "103.62.151.62",
                "device": "Unknown",
                "os": "unknown",
                "browser": "PostmanRuntime",
                "country": "India",
                "region": "KA",
                "regionName": "Karnataka",
                "city": "Mangalore",
                "lat": "12.9187",
                "lon": "74.8598",
                "isp": "SAN ENTERPRISES",
                "org": "NIXI",
                "zip": "575008",
                "_id": "66cf14897c748e0103ed4a7e"
            },
            {
                "timestamp": "August 28, 2024 at 12:14:38 PM UTC",
                "ip_address": "103.62.151.62",
                "device": "Unknown",
                "os": "Linux 64",
                "browser": "Chrome",
                "country": "India",
                "region": "KA",
                "regionName": "Karnataka",
                "city": "Mangalore",
                "lat": "12.9187",
                "lon": "74.8598",
                "isp": "SAN ENTERPRISES",
                "org": "NIXI",
                "zip": "575008",
                "_id": "66cf14ae7c748e0103ed4a82"
            }
        ],
        "createdAt": "2024-08-28T12:11:53.524Z",
        "updatedAt": "2024-08-28T12:14:38.634Z",
        "__v": 0
    }
]

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {
    // const [allUrlInformation, setAllUrlInformation] = useState([]);


    // useEffect(() => {
    //     const getAllUrlInfo = async () => {
    //         try {
    //             const allUrlResponse = await fetch('http://localhost:8000/api/v1/url/allUrlInfo');
    //             if (!allUrlResponse.ok) {
    //                 console.error('Failed to fetch URL information:');
    //             } else {
    //                 const data = await allUrlResponse.json();
    //                 setAllUrlInformation(data);
    //                 console.log(`Data`, data);
    //             }
    //         } catch (error) {
    //             console.error('Failed to fetch URL information:', error);
    //         }
    //     };

    //     getAllUrlInfo();
    // }, []);

    return (
        <div>
            {/* {/* <ShortenUrlForm /> */}
            <UrlList allUrlInformation={allUrlInformation} />
        </div>
    );
};

export default Dashboard;
