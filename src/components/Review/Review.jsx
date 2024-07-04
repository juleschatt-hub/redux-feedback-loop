import { Link } from 'react-router-dom';

function Review() {
    return (
        <>
        
            <h1>Review Your Feedback</h1>
            
               <Link to='/thank'>
                    <button type="submit" data-testid="next">Submit</button>
               </Link>
            
        </>
    )
}

export default Review;