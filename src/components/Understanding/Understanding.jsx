function Understanding() {
    return (
        <>
            <h1>How well are you understanding the content? (1-5)</h1>
            <form>
                <label htmlFor="understanding">Understanding? </label>
                <input type="number" name="" id="understanding" placeholder="1-5" />
                <button type="button" data-test-id="next">Next</button>
            </form>
        </>
    )
}

export default Understanding;