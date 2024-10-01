import React, { useState } from 'react';

const flashcards = [
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
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        setIsFlipped(false);

        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };


    
    

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='card-container'>
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
            </div>
        </div>
    );
};

export default Cards;