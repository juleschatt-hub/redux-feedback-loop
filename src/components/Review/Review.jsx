import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Review() {
const history = useHistory();
const dispatch = useDispatch();

 

  const fetchFeedback = () => {
    axios.get('/api/feedback')
      .then((response) => {
        console.log('GET /api/feedback success:', response.data);
        
      })
      .catch((error) => {
        console.log('Error getting feedback:', error);
      })
  }

  useEffect (() => {
    fetchFeedback();
  }, [])

    const feedback = useSelector(store => store.feedback);
    const addFeedback = (event) => {
        event.preventDefault();
        axios.post('/api/feedback', feedback)
            .then((response) => {
                console.log('Feeling post', response.data);
                history.push('/thank');            
            })
            .catch((error) => {
                console.log('error posting feeling:', error);
            })
    }


    return (
        <>
        
            <h1>Review Your Feedback</h1>
            <h3>Feeling: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <form onSubmit={(event) => addFeedback(event)}>
                    <button type="submit" data-testid="next">Submit</button>
            </form>
        </>
    )
}

export default Review;