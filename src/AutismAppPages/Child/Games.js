import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import ball from '../../assets/cartoon characters/objects/ball.png';
import car from '../../assets/cartoon characters/objects/car.png';
import book from '../../assets/cartoon characters/objects/book.png';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../AutismAppComponents/ButtonPrimary';

const Games = () => {
    const [objects, setObjects] = useState([
        {
            name: 'Ball',
            description: "It's round and bounces.",
            imageUrl: ball,
        },
        {
            name: 'Car',
            description: 'It has four wheels and you can drive it.',
            imageUrl: car,
        },
        {
            name: 'Book',
            description: 'You read it to learn new things.',
            imageUrl: book,
        },
    ]);

    const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
    const [score, setScore] = useState(3); // Set the initial score to the maximum (number of objects)
    const [listening, setListening] = useState(false);
    const [recognizer, setRecognizer] = useState(null);
    const [transcript, setTranscript] = useState('');
    const [gameCompleted, setGameCompleted] = useState(false); // Track if the game is completed

    const loadRecognizer = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.onresult = (event) => {
            const recognizedTranscript = event.results[0][0].transcript.toLowerCase();
            setTranscript(recognizedTranscript);
            checkAnswer(recognizedTranscript);
        };

        recognition.onend = () => {
            setListening(false);
            setCurrentObjectIndex((prevIndex) => prevIndex + 1);
        };

        setRecognizer(recognition);
    };

    const checkAnswer = (recognizedTranscript) => {
        const correctAnswer = objects[currentObjectIndex].name.toLowerCase();
        setTranscript(recognizedTranscript);
        if (recognizedTranscript.includes(correctAnswer)) {
            // No need to increment the score
        } else {
            // Decrement the score for incorrect answers
            setScore((prevScore) => prevScore - 1);
        }
    };

    useEffect(() => {
        loadRecognizer();
    }, []);

    useEffect(() => {
        if (currentObjectIndex < objects.length) {
            speakDescription();
        } else {
            setGameCompleted(true); // Mark the game as completed
        }
    }, [currentObjectIndex, objects]);

    const handleListening = () => {
        if (recognizer) {
            setListening(true);
            setTranscript('');
            recognizer.start();
        }
    };

    const speakDescription = () => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(
            `What is this? ${objects[currentObjectIndex].description}`
        );
        synth.speak(utterance);
    };

    return (
        <div className="bg-gradient-to-br from-yellow-200 to-orange-500 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-black mb-8">A.I.utism - Guess the Object</h1>
            {currentObjectIndex < objects.length ? (
                <div className="p-10 bg-gradient-to-br from-orange-300 to-red-500 border-orange-400 lg:rounded-lg">
                    <div className="object-image">
                        <img
                            className="h-48 w-48 rounded-md"
                            src={objects[currentObjectIndex].imageUrl}
                            alt={objects[currentObjectIndex].name}
                            style={{ maxWidth: '100%' }}
                        />
                    </div>
                    <p className="text-xl text-black mt-6">
                        Listen to the description and guess the object. Say the name when you're ready.
                    </p>
                    <p className="text-xl text-black mt-6">{transcript}</p>
                    <button
                        onClick={handleListening}
                        disabled={listening}
                        className={`${
                            listening
                                ? 'bg-gradient-to-r from-orange-500 to-red-600'
                                : 'bg-orange-500 hover:bg-orange-600'
                        } text-white font-bold text-lg py-2 px-4 rounded-full transition-all duration-300 mt-6`}
                    >
                        {listening ? 'Listening...' : 'Start Listening'}
                    </button>
                </div>
            ) : (
                <div className="p-10 bg-gradient-to-br from-orange-300 to-red-500 border-orange-400 lg:rounded-lg">
                    <p className="text-xl text-black mb-6">Congratulations! You've completed the game.</p>
                    <p className="text-xl text-black mb-6">Your Score: {score}/{objects.length}</p>
                    {gameCompleted && <Confetti />}
                </div>
            )}
            <div className="mt-8">
                <Link to="/child">
                    <ButtonPrimary text="Go Back" />
                </Link>
            </div>
        </div>
    );
};

export default Games;
