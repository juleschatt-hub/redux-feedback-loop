import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Feeling() {
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);
    let [feedbackToAdd, setFeedbackToAdd] = useState({feeling: ''});

    const handleFeelingChange = (event) =>{
        setFeedbackToAdd({
            ...feedbackToAdd,
            feeling: event.target.value,
        });
    } //END HANDLE_FEELING_CHANGE

    return (
        <>
            <h1>How are you feeling today? (1-5)</h1>
            
                <label htmlFor="feeling">Feeling? </label>
                <input 
                type="number"  
                id="feeling" 
                placeholder="1-5"
                value={feedbackToAdd.feeling} 
                onChange={handleFeelingChange}
                data-testid="input"
             />

                <Link to='/understanding'>
                    <button type="button" onClick={() => dispatch({type: 'SET_FEELING', payload: feedbackToAdd.feeling})} data-testid="next">Next</button>
                </Link>
               
        </>
    )
}

export default Feeling;