import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

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

function App() {
  const count = flashcards.length;

  return (
    <div className="App">
      <h1>The Ultimate Programming Flashcards</h1>
      <h2>How good is your knowledge about programming</h2>
      <h3>Cards Count: {count}</h3>
      <Cards />
    </div>
  )
}

export default App
