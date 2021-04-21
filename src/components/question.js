import React, {useState} from 'react'

const QuestionCard = ({data, checkCorrectAns}) => {
    
    // console.log(props)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [attemptedColor, setAttemptedColor] = useState('#000000')
    const {question, correct_answer} = data
    let True, False

    if(correct_answer === "True")
        True = true
    else
        False = true

    const textStyle = buttonClicked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}

    const handleButtonClicked = (value) => {
        if(!buttonClicked){
            checkCorrectAns(value)
            setButtonClicked(true)

            if(value)
                setAttemptedColor('#00FF48')
            else
                setAttemptedColor('#DB0202')
        }
    }
    
    return (
        <div className="questionContainer">
            <h3 className="question" style={textStyle}>{
                question.replace('&#039;', "'").replace('&quot;', '"').replace('&quot;', '"').replace('&quot;', '"').replace('&quot;', '"').replace('&quot;', '"').replace('&quot;', '"')
            }</h3>
            <div className="question-button-container">
                <button className="true" disable={buttonClicked} onClick={() => handleButtonClicked(True)}>True</button>
                <button className="false" disable={buttonClicked} onClick={() => handleButtonClicked(False)}>False </button>
            </div>
            {buttonClicked && <span style={{color: attemptedColor}}> Attempted</span>}
        </div>
    )
}


export default QuestionCard
