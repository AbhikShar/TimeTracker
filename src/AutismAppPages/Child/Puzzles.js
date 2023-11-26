import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import ButtonSecondary from '../../AutismAppComponents/ButtonSecondary';
import ButtonPrimary from '../../AutismAppComponents/ButtonPrimary';

const Puzzles = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        { letter: 'C', options: ['Cat', 'Dog', 'Bird'], correctAnswer: 'Cat' },
        { letter: 'E', options: ['Tiger', 'Eagle','Lion'], correctAnswer: 'Eagle' },
        { letter: 'L', options: ['Lemon', 'Apple', 'Banana'], correctAnswer: 'Lemon' },
        { letter: 'O', options: ['Grape', 'Strawberry','Orange'], correctAnswer: 'Orange' },
        { letter: 'T', options: ['Tiger', 'Elephant', 'Monkey'], correctAnswer: 'Tiger' },
    ];

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex === questions.length - 1) {
            setCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            <div className="max-w-2xl mx-auto py-8">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Alphabet Quiz Puzzle
                </h1>

                <div className="mt-6">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        {completed ? (
                            <div>
                                <Confetti
                                    width={window.innerWidth}
                                    height={window.innerHeight}
                                />
                                <p className="text-2xl font-semibold text-gray-900">
                                    Congratulations! You completed the puzzle!
                                </p>
                                <p className="mt-4 text-xl font-semibold text-gray-900">
                                    Your Score: {score} / {questions.length}
                                </p>
                            </div>
                        ) : (
                            <>
                                <p className="text-2xl font-semibold text-gray-900">
                                    What word starts with the letter {currentQuestion.letter}?
                                </p>
                                <div className="mt-4">
                                    {currentQuestion.options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(option)}
                                            className="rounded-md bg-gradient-to-r from-orange-400 via-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white hover:from-red-500 hover:to-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5733] mr-2 mb-2"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                        <Link to="/">
                            <button className="rounded-md bg-gradient-to-r from-orange-400 via-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white hover:from-red-500 hover:to-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5733] mr-2 mb-2">
                                Go back to home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Puzzles;
