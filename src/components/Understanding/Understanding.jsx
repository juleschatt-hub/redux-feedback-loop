import { Link } from 'react-router-dom';

function Understanding() {
    return (
        <>
            <h1>How well are you understanding the content? (1-5)</h1>
            
                <label htmlFor="understanding">Understanding? </label>
                <input type="number" name="" id="understanding" placeholder="1-5" />
                <Link to='/supported'>
                    <button type="button" data-testid="next">Next</button>
                </Link>
            
        </>
    )
}

export default Understanding;