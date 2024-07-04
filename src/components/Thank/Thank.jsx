import { Link } from 'react-router-dom';

function Thank() {
    return (
        <>
            <h1>Thank You For Your Feedback</h1>
            <form>
                <Link to='/'>
                    <button type="button" data-testid="next">Leave New Feedback</button>
                </Link>
            </form>
        </>
    )
}

export default Thank;