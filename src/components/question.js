import React, {useState} from 'react'

const QuestionCard = ({data, checkCorrectAns}) => {
    
    // console.log(props)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [message, setMessage] = useState({
        color: '#000000',
        message: ''
    })
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
                setMessage({
                    color: '#00FF48',
                    message: "Correct Ans"                    
                })
            else
                setMessage({
                    color: '#DB0202',
                    message: "Wrong Ans"
                })
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
            {buttonClicked && <span style={{color: message.color}}> {message.message}</span>}
        </div>
    )
}


export default QuestionCard
