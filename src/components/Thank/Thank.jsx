import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Thank() {
const dispatch = useDispatch();

const clearFeedback = () => {
    dispatch({type: 'CLEAR_FEEDBACK'});
   
}

    return (
        <>
            <h1>Thank You For Your Feedback</h1>
            <form>
                <Link to='/'>
                    <button type="button" data-testid="next" onClick={clearFeedback}>Leave New Feedback</button>
                </Link>
            </form>
        </>
    )
}

export default Thank;