import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [finalresult,setFinalresult]=useState(false)
  const [score,setScore]=useState(0)
  const [currentQuestion,setcurrentQuestion]=useState(0)
  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "Chennai", isCorrect: false },
        { id: 2, text: "Hyderabad", isCorrect: false },
        { id: 3, text: "Delhi", isCorrect: true },
      ],
    },
    {
      text:"Who is the First Prime Minister of India?",
      options: [
        { id: 0, text: "Nehru", isCorrect: true },
        { id: 1, text: "Gandhi", isCorrect: false },
        { id: 2, text: "Modi", isCorrect: false },
        { id: 3, text: "Lal Bahadur Shastri", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the India?",
      options: [
        { id: 0, text: "RadhaKrishnan", isCorrect: true },
        { id: 1, text: "Rajendra Prasad", isCorrect: false },
        { id: 2, text: "Zakir Hussain", isCorrect: false },
        { id: 3, text: "B.D.Jatti", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the India?",
      options: [
        { id: 0, text: "Andhra Pradesh", isCorrect: false },
        { id: 1, text: "Rajasthan", isCorrect: true },
        { id: 2, text: "Karnataka", isCorrect: false },
        { id: 3, text: "Madhya Pradesh", isCorrect: false },
      ],
    },
  ];
  const optionClicked=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1)
    }
    if(currentQuestion+1<questions.length){
      setcurrentQuestion(currentQuestion+1)
    }
    else{
      setFinalresult(true)
    }
  }
  const restart=()=>{
    setScore(0)
    setFinalresult(false)
    setcurrentQuestion(0)
  }
  return (
    <center>
      <h1>General Quiz</h1>
      <h2>Current Score : {score}</h2>
      {finalresult ? (
        <div className='result'>
        <h2>Final Result</h2>
        <h3>{score} out of {questions.length} correct</h3>
        <button className='btn' onClick={()=>restart()}>Restart Game</button>
      </div>
      ) :(
      <div className='card'>
        <h2>Question {currentQuestion+1} out {questions.length}</h2>
        <h3>{questions[currentQuestion].text}</h3>
        <ul>
          {questions[currentQuestion].options.map((option) =>{
            return(
              <li onClick={()=>optionClicked(option.isCorrect)}>{option.text}</li>
            )
          })}
    
        </ul>
      </div>
      )}
    </center>
  )
}

export default App