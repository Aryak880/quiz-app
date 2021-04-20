const ScoreCard = (props) => {
    return (<div className="score-container">
        <p>Your Score: <span>{props.value}</span></p>
    </div>)
}


export default ScoreCard