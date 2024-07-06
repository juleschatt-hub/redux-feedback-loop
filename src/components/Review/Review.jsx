import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Review() {

  useEffect (() => {
    fetchFeedback();
  }, [])

  const fetchFeedback = () => {
    axios.get('/api/feedback')
      .then((response) => {
        console.log('GET /api/feedback success:', response.data);
        
      })
      .catch((error) => {
        console.log('Error getting feedback:', error);
      })
  }

    const feedback = useSelector(store => store.feedback);
    const addFeeling = (event) => {
        event.preventDefault();
        axios.post('/api/feedback', feedback)
            .then((response) => {
                console.log('Feeling post', response.data);             
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
            {/* <form onSubmit={(event) => addFeeling(event)}> */}
               {/* <Link to='/thank'> */}
                    <button type="submit" data-testid="next" onClick={(event => addFeeling(event))}><Link to='/thank'>Submit</Link></button>
               {/* </Link> */}
            {/* </form> */}
        </>
    )
}

export default Review;