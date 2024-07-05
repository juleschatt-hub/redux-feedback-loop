import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

function Feeling() {
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);
    let [feedbackToAdd, setFeedbackToAdd] = useState({feeling: ''})

    const handleFeelingChange = (event) =>{
        setFeedbackToAdd({...feedbackToAdd,
            feeling: event.target.value,
        });
    } //END HANDLE_FEELING_CHANGE

    const addFeeling = (event) => {
        event.preventDefault();

        axios.post('/api/feedback', {feeling: feedbackToAdd.feeling})
            .then((response) => {
                console.log('Feeling post', response.data);
                dispatch({type: 'SET_FEELING', payload: response.data});
            })
            .catch((error) => {
                console.log('error posting feeling:', error);
            })
    }
    return (
        <>
            <h1>How are you feeling today? (1-5)</h1>
            
                <label htmlFor="feeling">Feeling? </label>
                <input type="number"  
                id="feeling" 
                placeholder="1-5" 
                onChange={handleFeelingChange} 
                value={feedbackToAdd.feeling} />

                <Link to='/understanding'>
                    <button onClick={(e) => addFeeling(e)} type="button" data-testid="next">Next</button>
                </Link>

                <ul>
                    {feedback.map((item, i) => <li key={i}>{item.feeling}</li> )}
                </ul>
            
        </>
    )
}

export default Feeling;