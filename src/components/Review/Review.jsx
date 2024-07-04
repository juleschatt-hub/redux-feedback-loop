import { Link } from 'react-router-dom';

function Review() {
    return (
        <>
            <h1>Review Your Feedback</h1>
            <form>
               <Link to='/thank'>
                    <button type="submit" data-testid="next">Submit</button>
               </Link>
            </form>
        </>
    )
}

export default Review;