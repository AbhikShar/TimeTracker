import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import ButtonPrimary from '../../AutismAppComponents/ButtonPrimary';

const Videos = () => {

    const videosData = [
        {
            id: 1,
            title: 'Action 1: Flying',
            videoUrl: 'https://www.youtube.com/embed/u2glhGsK3Q8?autoplay=1'
        },
        {
            id: 2,
            title: 'Action 2: Applauding',
            videoUrl: 'https://www.youtube.com/embed/oq49Bfjw3c4?autoplay=1',
        },
        {
            id: 3,
            title: 'Action 3: Running',
            videoUrl: 'https://www.youtube.com/embed/hA47tfFK3dw?autoplay=1'
        },
        {
            id: 4,
            title: 'Action 4: Dance',
            videoUrl: 'https://www.youtube.com/embed/2UcZWXvgMZE?autoplay=1'
        },
        {
            id: 5,
            title: 'Action 5: To Sing',
            videoUrl: 'https://www.youtube.com/embed/G9H2aliqkq8?autoplay=1'
        },
        {
            id: 6,
            title: 'Action 6: Painting',
            videoUrl: 'https://www.youtube.com/embed/Z2q5FSGAvHs?autoplay=1'
        },
        {
            id: 7,
            title: 'Action 7: Swimming',
            videoUrl: 'https://www.youtube.com/embed/9fN3VIoNDbc?autoplay=1'
        },
        {
            id: 8,
            title: 'Action 8: Cycling',
            videoUrl: 'https://www.youtube.com/embed/h4oylLZx3LY?autoplay=1'
        },
        {
            id: 9,
            title: 'Action 9: Reading',
            videoUrl: 'https://www.youtube.com/embed/JDV8bG_M9zw?autoplay=1'
        },
        {
            id: 10,
            title: 'Action 10: Writing',
            videoUrl: 'https://www.youtube.com/embed/glkQwKA5_PU?autoplay=1'  // No new video found for "Writing"
        },
    ];


    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [courseCompleted, setCourseCompleted] = useState(false);
    const [showCompletionPopup, setShowCompletionPopup] = useState(false);

    const handleNextVideo = () => {
        if (currentVideoIndex < videosData.length - 1) {
            setCurrentVideoIndex((prevIndex) => prevIndex + 1);
        } else {
            setCourseCompleted(true);
        }
    };

    const handlePreviousVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex((prevIndex) => prevIndex - 1);
        }
    };

    const currentVideo = videosData[currentVideoIndex];

    const handleMarkCompleted = () => {
        if (currentVideoIndex === videosData.length - 1) {
            setShowCompletionPopup(true);
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#fdff9e] to-[#ff6434] ">
            <div className="max-w-2xl mx-auto py-8">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    {currentVideo.title}
                </h1>
                <div className="mt-6 aspect-w-16 aspect-h-9">
                    <iframe
                        src={currentVideo.videoUrl}
                        title={currentVideo.title}
                        className="w-full h-[400px] lg:h-[500px] rounded-lg"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-6 flex justify-between">
                    <button
                        onClick={handlePreviousVideo}
                        className="rounded-md bg-[#ff8282] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={currentVideoIndex === 0}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextVideo}
                        className="rounded-md bg-[#ff8282] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        disabled={currentVideoIndex === videosData.length - 1}
                    >
                        Next
                    </button>
                </div>
                <div className="mt-6 text-center">
                    {courseCompleted ? (
                        <div>
                            <Link
                                to="/course-completed"
                                className="rounded-md bg-[#ff8282] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Complete Course
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="w-full h-4 bg-[#ff8282] rounded-md relative">
                                <div
                                    className="h-4 bg-indigo-100 rounded-md"
                                    style={{
                                        width: `${((currentVideoIndex + 1) / videosData.length) * 100}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="ml-2 text-gray-600">
                                {`${((currentVideoIndex + 1) / videosData.length) * 100}% Complete`}
                            </div>
                        </div>
                    )}
                </div>
                {!courseCompleted && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleMarkCompleted}
                            className="rounded-md bg-[#ff8282] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Mark as Completed
                        </button>
                        <div className='flex'>
                        <Link to="/child">
                            <div style={{
                                marginLeft:"12px",
                                marginTop:"50px",
                                marginBottom:"40px"
                            }}>
                                <ButtonPrimary text="Go Back to Home" />
                            </div>
                        </Link>
                        <Link to="/games">
                            <div style={{
                                marginLeft:"60px",
                                marginTop:"50px",
                                marginBottom:"40px"
                            }}>
                                <ButtonPrimary text="Play Games" />
                            </div>
                        </Link>
                        <Link to="/puzzles">
                            <div style={{
                                marginLeft:"60px",
                                marginTop:"50px",
                                marginBottom:"40px"
                            }}>
                                <ButtonPrimary text="Solve Puzzles" />
                            </div>
                        </Link>
                        </div>
                    </div>
                    
                )}
            </div>
            {showCompletionPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Congratulations! Course Completed!
                        </h2>
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                        />
                        <p className="mt-4 text-lg text-gray-600">
                            You've successfully completed the course. Well done!
                        </p>
                        <Link
                            to="/course-completed"
                            className="mt-6 rounded-md bg-[#ff8282] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-100 hover:text-[#0D79F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Close
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videos;