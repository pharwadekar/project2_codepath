import React, { useState } from 'react';

const initialFlashcards = [
    { question: 'What does HTML stand for?', answer: 'HyperText Markup Language' },
    { question: 'What is the main programming language used for Android development?', answer: 'Java' },
    { question: 'Who is known as the father of the C programming language?', answer: 'Dennis Ritchie' },
    { question: 'What does CSS stand for?', answer: 'Cascading Style Sheets' },
    { question: 'What is the name of the version control system created by Linus Torvalds?', answer: 'Git' },
    { question: 'What is the main programming language used for iOS development?', answer: 'Swift' },
    { question: 'What does SQL stand for?', answer: 'Structured Query Language' },
    { question: 'Who is known as the father of the Java programming language?', answer: 'James Gosling' },
    { question: 'What is the main purpose of the Python programming language?', answer: 'General-purpose programming' },
    { question: 'What does API stand for?', answer: 'Application Programming Interface' }
];

const Cards = () => {
    const [flashcards, setFlashcards] = useState(initialFlashcards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [streak, setStreak] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setUserGuess('');
        setFeedback('');
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
        setUserGuess('');
        setFeedback('');
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleGuessChange = (e) => {
        setUserGuess(e.target.value);
    };

    const handleGuessSubmit = () => {
        if (userGuess.trim().toLowerCase() === flashcards[currentIndex].answer.toLowerCase()) {
            setFeedback('Correct!');
            setStreak((prevStreak) => prevStreak + 1);
        } else {
            setFeedback('Incorrect, try again.');
            setStreak(0);
        }
    };

    const shuffleFlashcards = () => {
        const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
        setFlashcards(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
        setUserGuess('');
        setFeedback('');
    };

    return (
        <div className='card-container'>
            <h3 style={{ color: 'black' }}>Streak: {streak}</h3>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <h2>{flashcards[currentIndex].question}</h2>
                    </div>
                    <div className='flip-card-back'>
                        <p>{flashcards[currentIndex].answer}</p>
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button onClick={handlePrev}>Back</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={shuffleFlashcards}>Shuffle</button>
            </div>
            <div className='guess-container'>
                <input 
                    type='text' 
                    value={userGuess} 
                    onChange={handleGuessChange} 
                    placeholder='Enter your guess' 
                />
                <button onClick={handleGuessSubmit}>Submit Guess</button>
                <p style={{ color: feedback === 'Correct!' ? 'green' : 'red' }}>{feedback}</p>
            </div>
        </div>
    );
};

export default Cards;