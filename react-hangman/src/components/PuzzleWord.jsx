
function PuzzleWord({solution}) {


    return (
        <div className="py-4 d-flex justify-content-center">
            <div className="d-flex justify-content-between w-50">
                {solution.split('').map((elem, index) => {
                    return <h3 key={index}>{elem}</h3>
                })}
            </div>
            
        </div>
    )
}

export default PuzzleWord


// A component that displays the puzzle word (letters should be separated by spaces).
// Letters that haven't been guessed should be displayed as an underscore
//     - letters that have been guessed should be displayed.