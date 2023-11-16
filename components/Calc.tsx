import { ReactEventHandler, useState } from "react";
import RiskAnswer from '@/components/RiskAnswers';
import calcQuestions from "@/content/calculatorQuestions";


export default function Calc() {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null | number>(null);
    const [score, setScore] = useState<number>(0);
    const [showResult, setShowResult] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);

    const questions = calcQuestions;
    const {question, choices, questionNumber} = questions[activeQuestion];

    const selectedAnswerStyles = 'bg-indigo border-1 border-purple'

    const handleSelected = (value: number, index: number) => {
        setSelectedAnswer(value)
        setSelectedAnswerIndex(index)
    }

    const onClickNext = () => {
        setScore(selectedAnswer + score)
        setSelectedAnswerIndex(null)

        if (activeQuestion !== questions.length -1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
    }

    const startOver = () => {
        setSelectedAnswerIndex(null);
        setScore(0);
        setActiveQuestion(0);
        setSelectedAnswer(0);
        setShowResult(false);
    }

    return (
        <div className='flex flex-col bg-white w-screen h-screen justify-center items-center relative'>
            <div className='opacity-40 bg-black fixed inset-0 z-40' ></div>
            <div className='absolute top-0 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {showResult ? (
                    <div>
                        <RiskAnswer score={score} />
                        Total: {score}

                        <button onClick={() => startOver()}>
                            Start Over
                        </button>
                    </div>
                ) : (
                    <div className=''>
                        {/* <button onClick={() => previousQuestion()}>
                            Previous question
                        </button> */}

                        <h1>Quiz</h1>
                        <h2> {questionNumber}.) {question}</h2>
                        <ul>
                            {choices.map((item, index) => (
                                <li 
                                    onClick={() => handleSelected(item[1], index)} 
                                    key={index}
                                    className={selectedAnswerIndex === index ? selectedAnswerStyles : ''}
                                >
                                    {item[0]}
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => onClickNext()}
                            disabled={selectedAnswerIndex === null}
                        >
                            {activeQuestion === questions.length-1 ? 'Finish': 'Next'}
                        </button>
                    </div>
                )}
                <div className="caption">
                    To better help us formulate an accurate risk factor please consider, also filling out 
                    <a href="">our survey</a>.
                </div>

            </div>
        </div>
    )
}