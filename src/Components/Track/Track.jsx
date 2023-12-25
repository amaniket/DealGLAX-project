// Track.jsx

import React from 'react';
import './Track.css'; // Import the CSS file

function Track() {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 md:py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-12 md:w-1/2 lg:w-1/3">
                            <div className="track-card">
                                <svg
                                    className="text-pink-800 w-14 h-16 mb-3 inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900">
                                    Geniune Products
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed" >
                                    Our Products are Geniune
                                </p>
                            </div>
                        </div>
                        <div className="p-12 md:w-1/2 lg:w-1/3">
                            <div className="track-card">
                                <svg
                                    className="text-pink-800 w-14 h-16 mb-3 inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900">
                                    Safe Transaction
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Transaction in front of authority 
                                </p>
                            </div>
                        </div>
                        <div className="p-12 md:w-1/2 lg:w-1/3">
                            <div className="track-card">
                                <svg
                                    className="text-pink-800 w-14 h-16 mb-3 inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900">
                                    Offers
                                </h2>
                                <p className=" text-lg text-gray-700 leading-relaxed">
                                    Get new offers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;
