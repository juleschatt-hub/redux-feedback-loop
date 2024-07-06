import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Review() {
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
            {/* <form onSubmit={(event) => addFeeling(event)}> */}
               <Link to='/thank'>
                    <button type="submit" data-testid="next" onClick={(event => addFeeling(event))}>Submit</button>
               </Link>
            {/* </form> */}
        </>
    )
}

export default Review;