
function UsedLetters( {usedLetters} ) {

    function showLetters() {
        if (usedLetters.length > 0) {
            return (
                usedLetters.join(', ')
            )
        }
    }

    return (
        <div className="text-center">
            <h4 className="p-0 m-0 text-decoration-underline">Guessed Letters</h4>
            <h4 className="pt-2 m-0">
                { showLetters() }
            </h4>
        </div>
    )
}

export default UsedLetters

// A component that displays letters that are not part of the puzzle word.