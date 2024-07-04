function Feeling() {
    return (
        <>
            <h1>How are you feeling today? (1-5)</h1>
            <form>
                <label htmlFor="feeling">Feeling? </label>
                <input type="number" name="" id="feeling" placeholder="1-5" />
                <button type="button" data-test-id="next">Next</button>
            </form>
        </>
    )
}

export default Feeling;