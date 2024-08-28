import React from 'react';

const UrlList = ({ allUrlInformation }) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Shortened URLs</h2>
            {allUrlInformation?.map((urlInfo) => (
                <div key={urlInfo.shortId} className="p-4 bg-white border border-gray-300 rounded-lg mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="bg-blue-200 p-3 rounded">
                            <strong>Short ID:</strong> {urlInfo.shortId}
                        </div>
                        <div className="bg-blue-100 p-3 rounded">
                            <strong>Custom Redirect URL:</strong>
                            <a
                                href={`https://linkify-api.shreyas.info/api/v1/url/${urlInfo.shortId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                linkify-app.shreyas.info/{urlInfo.shortId}
                            </a>
                        </div>
                        <div className="bg-blue-100 p-3 rounded">
                            <strong>Original URL:</strong>
                            <a
                                href={urlInfo.redirectURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {urlInfo.redirectURL}
                            </a>
                        </div>
                        <div className="bg-blue-100 p-3 rounded">
                            <strong>Total Clicks:</strong>
                            <span className="text-xl">{urlInfo.visitHistory.length}</span>
                        </div>
                    </div>

                    {urlInfo.visitHistory.map((visit, index) => (
                        <div key={index} className="mb-4">
                            <div className="grid grid-cols-2 gap-4 p-4 border border-gray-300 rounded-lg bg-white mb-4">
                                <div><strong>Timestamp:</strong> {visit.timestamp}</div>
                                <div><strong>IP Address:</strong> {visit.ip_address}</div>
                                <div><strong>Device:</strong> {visit.device}</div>
                                <div><strong>OS:</strong> {visit.os}</div>
                                <div><strong>Browser:</strong> {visit.browser}</div>
                                <div><strong>Country:</strong> {visit.country}</div>
                                <div><strong>Region:</strong> {visit.region}</div>
                                <div><strong>Region Name:</strong> {visit.regionName}</div>
                                <div><strong>City:</strong> {visit.city}</div>
                                <div><strong>Latitude:</strong> {visit.lat}</div>
                                <div><strong>Longitude:</strong> {visit.lon}</div>
                                <div><strong>ISP:</strong> {visit.isp}</div>
                                <div><strong>Org:</strong> {visit.org}</div>
                                <div><strong>Zip:</strong> {visit.zip}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default UrlList;
