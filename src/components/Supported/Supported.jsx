function Supported() {
    return (
        <>
            <h1>How well are you being supported? (1-5)</h1>
            <form>
                <label htmlFor="supported">Support? </label>
                <input type="text" name="" id="supported" placeholder="1-5" />
                <button type="button" data-test-id="next">Next</button>
            </form>
        </>
    )
}

export default Supported;