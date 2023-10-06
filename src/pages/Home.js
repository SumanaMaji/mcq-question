import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
  const[question, setQuestion] = useState([]);
  const[count, setCount]= useState(1);
  const[selectedAnswer, setSelectedAnswer] = useState(false);
  const[correctAnswer, setCorrectAnswer]= useState(false);
  const[wrongAnswers, setWrongAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);


  const questionUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy';

  useEffect(() => {
    fetch(questionUrl)
    .then(response => response.json())
    .then((data) => setQuestion(data.results))
  },[])

  //the useRef Hook allows you to persist data between renders
  const prevCountRef = useRef();

  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = count;
  }, [count]); //run this code when the value of count changes

  // console.log(question[0])
  // const nextQuestion= () => {
  //   this.setState({ count: this.state.count + 1 });
  // }
   //console.log("maxx"+question.length);
  if(question.length > 0){
    const allAns = [...question[0].correct_answer, ...question[0].incorrect_answers ] 
  //console.log("anss->"+allAns)
  // console.log(question[0].question)
}
const handleClick = (event, param, check) => {
  //console.log(event)
 // console.log(check);
  //console.log(param);
const newAns = [];
  if(check == true)
  {
    setCorrectAnswer(param);
   
  }
 else{
  setWrongAnswers(param);
 }
  // 👇️ merge arrays 👇️
  setAllAnswers(...correctAnswer, ...wrongAnswers );
  console.log("all->"+allAnswers);
 // setAnswers(newAns);
  setCount(count+1);
}

const nextQuestion = (count) => {
 // console.log(count);
  setCount(count+1);
  setCorrectAnswer(false);
};
const previousQuestion = (count) => {
 // console.log(count);
  setCount(count-1);
  setCorrectAnswer(false);
};
  return (
    <div className='outBox'>
      <Container className='vh-100 d-flex align-items-center justify-content-center'>
        {
        question.length > 1 ? 
        (
        <div className='innerBox'>
            <Row>
                <Col md={8}>
                    <div className='text-white'>
                    <p>Question No: {count}/10</p>
                    </div>
                    <h2 className='text-white'>{question[count].question}</h2>
                </Col>
                <Col md={4}>
                    <div className='d-flex align-items-center justify-content-center'>
                    <div className='btn-group-vertical'>
                    <Button variant="outline-warning" disabled={selectedAnswer} onClick={event => handleClick(event, question[count].correct_answer, true)}>{question[count].correct_answer}</Button>
                        <Button variant="outline-warning" disabled={selectedAnswer} onClick={event => handleClick(event, question[count].incorrect_answers[0],false)}>{question[count].incorrect_answers[0]}</Button>
                        <Button variant="outline-warning" disabled={selectedAnswer} onClick={event => handleClick(event, question[count].incorrect_answers[1], false)}>{question[count].incorrect_answers[1]}</Button>
                        <Button variant="outline-warning" disabled={selectedAnswer} onClick={event => handleClick(event, question[count].incorrect_answers[2], false)}>{question[count].incorrect_answers[2]}</Button>
                    </div>
                    </div>
                </Col>
            </Row>
        </div>
        )
        : <h1 className='text-white'>Loading...</h1>
      
        }
        
      </Container>
      {correctAnswer ?(
      <p>Your Correct answer : {correctAnswer}</p>
      ) : null }
      <h1>
      Now: {count}, before: {prevCountRef.current}
      {/*Increment  */}
      <button onClick={() => setCount((count) => count + 1)}>Next{count}</button>
    </h1>
     {/* show previous button if we are not on first element */}
     {count > 1 && <button onClick={() => previousQuestion(count)}>Prev</button>}

    {/* hide next button if we are at the last element */}
    {count < question.length - 1 && <button onClick={() => nextQuestion(count)}>Next</button>}

    </div>
  )
}

export default Home;
