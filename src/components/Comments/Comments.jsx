function Comments() {
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form>
                <label htmlFor="comments">Comments: </label>
                <input type="text" name="" id="comments" placeholder="Comments or Concerns" />
                <button type="button" data-test-id="next">Next</button>
            </form>
        </>
    )
}

export default Comments;