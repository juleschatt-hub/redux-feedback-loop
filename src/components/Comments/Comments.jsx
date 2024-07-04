import { Link } from 'react-router-dom';

function Comments() {
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form>
                <label htmlFor="comments">Comments: </label>
                <input type="text" name="" id="comments" placeholder="Comments or Concerns" />
                <Link to='/review'>
                    <button type="button" data-testid="next">Next</button>
                </Link>
            </form>
        </>
    )
}

export default Comments;