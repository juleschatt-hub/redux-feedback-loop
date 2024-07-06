import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Supported() {
    const dispatch = useDispatch();
    let [feedbackToAdd, setFeedbackToAdd] = useState({support: ''});
    const handleSupportChange = (event) =>{
        setFeedbackToAdd({
            ...feedbackToAdd,
            support: event.target.value,
        })
    }

    return (
        <>
            <h1>How well are you Being supported? (1-5)</h1>
            
                <label htmlFor="support">Supported? </label>
                <input 
                type="number"  
                id="support" 
                placeholder="1-5"
                value={feedbackToAdd.support} 
                onChange={handleSupportChange}
                data-testid="input"
             />                
                <Link to='/comments'>
                    <button type="button" onClick={() => dispatch({type: 'SET_SUPPORT', payload: feedbackToAdd.support})} data-testid="next">Next</button>
                </Link>
            
        </>
    )
}

export default Supported;