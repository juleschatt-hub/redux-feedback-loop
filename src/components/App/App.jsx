import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [feedBackList, setFeedbackList] = useState([])
  useEffect (() => {
    fetchFeedback();
  }, [])


  const fetchFeedback = () => {
    axios.get('/api/feedback')
      .then((response) => {
        console.log('GET /api/feedback success:', response.data);
        setFeedbackList(response.data);
      })
      .catch((error) => {
        console.log('Error getting feedback:', error);
      })
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <ul>
        {feedBackList.map((feedback) => (
          <li>{feedback.understanding}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
