import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Understanding() {
    const dispatch = useDispatch();
    let [feedbackToAdd, setFeedbackToAdd] = useState({understanding: ''});
    const handleUnderstandingChange = (event) =>{
        setFeedbackToAdd({
            ...feedbackToAdd,
            understanding: event.target.value,
        })
    }

    return (
        <>
            <h1>How well are you understanding the content? (1-5)</h1>
            
                <label htmlFor="understanding">Understanding? </label>
                <input 
                type="number"  
                id="understanding" 
                placeholder="1-5"
                value={feedbackToAdd.understanding} 
                onChange={handleUnderstandingChange}
             />                
                <Link to='/supported'>
                    <button type="button" onClick={() => dispatch({type: 'SET_UNDERSTANDING', payload: feedbackToAdd.understanding})} data-testid="next">Next</button>
                </Link>
            
        </>
    )
}

export default Understanding;