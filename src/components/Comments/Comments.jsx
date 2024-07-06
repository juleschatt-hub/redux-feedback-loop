import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Comments() {
    const dispatch = useDispatch();
    let [feedbackToAdd, setFeedbackToAdd] = useState({comments: ''});
    const handleCommentsChange = (event) =>{
        setFeedbackToAdd({
            ...feedbackToAdd,
            comments: event.target.value,
        })
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            
                <label htmlFor="comments">Comments </label>
                <input 
                type="text"  
                id="support" 
                placeholder="Comments"
                value={feedbackToAdd.support} 
                onChange={handleCommentsChange}
             />                
                <Link to='/review'>
                    <button type="button" onClick={() => dispatch({type: 'SET_COMMENTS', payload: feedbackToAdd.comments})} data-testid="next">Next</button>
                </Link>
            
        </>
    )
}

export default Comments;