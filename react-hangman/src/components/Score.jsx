
function Score( {count, solution, puzzleWord} ) {

    function showCount() {
        if (solution === puzzleWord) {
            alert('You Win!');
            window.location.reload(true);
        } else if (count <= 0) {
            alert('You Lose!')
            window.location.reload(true);
        } else {
            return count
        }
    }

    return (
        <div className="text-center">
            <h4 className="m-0 text-decoration-underline">
                Guesses Remaining
            </h4>
            <h2 className="mt-2"><b>
                {showCount()}
            </b></h2>
        </div>
    )
}

export default Score