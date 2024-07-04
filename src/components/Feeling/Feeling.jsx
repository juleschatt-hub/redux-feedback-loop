import { Link } from 'react-router-dom';

function Feeling() {
    return (
        <>
            <h1>How are you feeling today? (1-5)</h1>
            <form>
                <label htmlFor="feeling">Feeling? </label>
                <input type="number" name="" id="feeling" placeholder="1-5" />
                <Link to='/understanding'>
                    <button type="button" data-testid="next">Next</button>
                </Link>
            </form>
        </>
    )
}

export default Feeling;