import { Link } from 'react-router-dom';

function Supported() {
    return (
        <>
            <h1>How well are you being supported? (1-5)</h1>
            
                <label htmlFor="supported">Support? </label>
                <input type="text" name="" id="supported" placeholder="1-5" />
                <Link to='/comments'>
                    <button type="button" data-testid="next">Next</button>
                </Link>
            
        </>
    )
}

export default Supported;