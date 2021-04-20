import React, {useState, useEffect} from 'react'
// import './style/style.css'
import QuestionCard from './question'
import ScoreCard from './scoreCard'
import image from '../image/logo.png'


const FormContainer = () => {

    let category = 9, difficulty = "easy", numberOfQuestion = 10
    const [URL, setURL] = useState(`https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${category}&difficulty=${difficulty}&type=boolean`)
    const [data, setData] = useState([])
    const [correctAns, setCorrectAns] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        setURL(`https://opentdb.com/api.php?amount=${numberOfQuestion}&category=${category}&difficulty=${difficulty}&type=boolean`)
        setCorrectAns(0)
    }

    useEffect(() => {
        fetch(URL).then((res) => res.json()).then(data => setData(data.results))
    }, [URL])


    const checkCorrectAns = (value) => {
        if(value)
            setCorrectAns(correctAns + 1)
    }
    let Questions = data.map(e => <QuestionCard data={e} key={e.question} checkCorrectAns={checkCorrectAns}/>)

    return (
        <div className="Container">
            <div className="logo-container">
                <img src={image} alt="LOGO" />
            </div>

            <div className="FormContainer">
               <form onSubmit={handleSubmit}>
                   <div>
                        <label className="Q-input">
                            Number of Question:
                            <input type="number" placeholder="10" name="numberOfQuestion" min="1" max="50" onChange={(e) =>  numberOfQuestion = (e.target.value).toString()}/>
                        </label>
                   </div>
                   <div>
                        <label className="Q-input">Select Category:                      
                                <select defaultValue="9" name="selectCategory" onChange={e => {
                                    if(e.target.value === 'any'){
                                        const ca = [9, 11, 12, 15, 17, 18, 22, 23, 24, 27, 30, 31]

                                        category = ca[Math.floor(11*Math.random())]
                                    }
                                    else
                                        category = parseInt(e.target.value, 10)
                                }}>
                                    <option value="any">Any Category</option>
                                    <option value="9">General Knowledge</option>
                                    {/* <option value="10">Entertainment: Books</option> */}
                                    <option value="11">Entertainment: Film</option>
                                    <option value="12">Entertainment: Music</option>
                                    {/* <option value="13">Entertainment: Musicals &amp; Theatres</option> */}
                                    {/* <option value="14">Entertainment: Television</option> */}
                                    <option value="15">Entertainment: Video Games</option>
                                    {/* <option value="16">Entertainment: Board Games</option> */}
                                    <option value="17">Science &amp; Nature</option>
                                    <option value="18">Science: Computers</option>
                                    {/* <option value="19">Science: Mathematics</option> */}
                                    {/* <option value="20">Mythology</option> */}
                                    {/* <option value="21">Sports</option> */}
                                    <option value="22">Geography</option>
                                    <option value="23">History</option>
                                    <option value="24">Politics</option>
                                    {/* <option value="25">Art</option> */}
                                    {/* <option value="26">Celebrities</option> */}
                                    <option value="27">Animals</option>
                                    {/* <option value="28">Vehicles</option> */}
                                    {/* <option value="29">Entertainment: Comics</option> */}
                                    <option value="30">Science: Gadgets</option>
                                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                                    {/* <option value="32">Entertainment: Cartoon &amp; Animations</option> */}
                                </select>
                        </label>
                   </div>
                   <div>
                        <label className="Q-input">Select Difficulty:
                            <select name="selectDifficulty" onChange={(e) => difficulty = e.target.value}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                            </select>
                        </label>
                   </div>
                   <div>
                        <label className="submit"> 
                            <input type="submit"/>
                        </label>
                   </div>
               </form>
            </div>
            
           <ScoreCard value={correctAns} />

            <div className="questionCardContainer">
               {
                   !Questions.length ? <h1>Try some differnt difficulty level or number of question</h1> : Questions
               }
            </div>
        </div>
    )
}


export default FormContainer