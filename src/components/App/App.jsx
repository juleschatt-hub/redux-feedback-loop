import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Understanding from '../Understanding/Understanding.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Thank from '../Thank/Thank.jsx';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [feedBackList, setFeedbackList] = useState([])
  useEffect (() => {
    fetchFeedback();
  }, [])


  const fetchFeedback = () => {
    axios.get('/api/feedback')
      .then((response) => {
        console.log('GET /api/feedback success:', response.data);
        // dispatch({type:'SET_FEEDBACK', payload: response.data});
      })
      .catch((error) => {
        console.log('Error getting feedback:', error);
      })
  }
  
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
          <Route exact path='/'>
            <Feeling />
          </Route>
          <Route path='/understanding'>
            <Understanding />
          </Route>
          <Route path='/supported'>
            <Supported />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/thank'>
            <Thank />
          </Route>
      </div>
    </Router>
  );
}

export default App;
