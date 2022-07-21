
function InputForm( {handleInputData} ) {

    return (
        <div className="d-flex mb-3 align-items-center justify-content-center">
            <input type="text" id="userInput" maxLength="1" className="bg-white text-dark me-3 text-center"/>
            <button onClick={handleInputData} className="btn btn-primary">Submit</button>
        </div>
    )
}

export default InputForm


// A component that contains a text input and a button to submit the guessed letter.
// If the letter submitted has already been guessed, display an alert().