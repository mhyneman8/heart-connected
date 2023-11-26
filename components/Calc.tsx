import { ReactEventHandler, useState } from 'react';
import RiskAnswer from '@/components/RiskAnswers';
import calcQuestions from '@/content/calculatorQuestions';
import styles from './styles.module.css';

type Props = {
	setShowCalculator: React.Dispatch<React.SetStateAction<boolean>>;
};

type questions = {
	key: string | number;
};

export default function Calc({ setShowCalculator }: Props) {
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null | number>(
		null
	);
	const [score, setScore] = useState<number>(0);
	const [showResult, setShowResult] = useState(false);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(0);
	const [selectedAdvice, setSelectedAdvice] = useState('');
	const [advice, setAdvice] = useState<string[]>([]);

	const questions = calcQuestions;
	const { question, choices, questionNumber } = questions[activeQuestion];

	const selectedAnswerStyles =
		'bg-indigo border-purple w-fit px-5 mb-4 py-1 rounded-full hover:cursor-pointer';

	const handleSelected = (item: questions, index: number) => {
		const valueProp = item[2] as string;
		const value = item[1];
		setSelectedAnswer(value);
		setSelectedAnswerIndex(index);
		setSelectedAdvice(valueProp);
		console.log('selected', selectedAdvice);
	};

	const onClickNext = () => {
		console.log('next', advice);
		setScore(selectedAnswer + score);
		setSelectedAnswerIndex(null);
		if (selectedAdvice !== undefined) setAdvice([...advice, selectedAdvice]);
		console.log('after', advice);
		if (activeQuestion !== questions.length - 1) {
			setActiveQuestion((prev) => prev + 1);
		} else {
			setActiveQuestion(0);
			setShowResult(true);
		}
	};

	const startOver = () => {
		setSelectedAnswerIndex(null);
		setScore(0);
		setActiveQuestion(0);
		setSelectedAnswer(0);
		setShowResult(false);
		setAdvice([]);
	};

	const handleClose = () => {
		console.log('clicked');
		document.querySelector('body')!.style.overflow = 'auto';
		setShowCalculator(false);
	};

	return (
		<div className='flex flex-col bg-white h-screen relative top-0 justify-center items-center relative  w-[80vw] md:w-full'>
			<div className='opacity-40 bg-black fixed inset-0 z-40 overflow-hidden'></div>
			<div className='overflow-y-auto fixed max-w-[520px] inset-0 z-50 outline-none focus:outline-none border-0 my-10 mx-auto w-max-[500px] p-8 rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none'>
				<button
					className='absolute right-10'
					onClick={() => handleClose()}
				>
					X
				</button>
				<h1 className='font-bold text-lg mb-3'>Trauma Risk Factors</h1>
				{showResult ? (
					<div className='mt-8'>
						<RiskAnswer
							score={score}
							valueProps={advice}
						/>
						<div className='w-full flex justify-center items-center mt-10'>
							<button
								className={styles.primaryBtn}
								onClick={() => startOver()}
							>
								Start Over
							</button>
						</div>
					</div>
				) : (
					<div className=''>
						{/* <button className={styles.primaryBtn} onClick={() => previousQuestion()}>
                            Previous question
                        </button> */}

						<div className='font-bold text-xs mb-3'>
							Question {questionNumber} / 9
						</div>
						<h2 className='mb-4'>{question}</h2>
						<ul className='ml-6'>
							{choices.map((item, index) => (
								<li
									onClick={() => handleSelected(item, index)}
									key={index}
									className={
										selectedAnswerIndex === index
											? selectedAnswerStyles
											: 'px-5  py-1 mb-4 hover:cursor-pointer'
									}
								>
									{item[0]}
								</li>
							))}
						</ul>
						<div className='w-full flex justify-center items-center'>
							<button
								onClick={() => onClickNext()}
								disabled={selectedAnswerIndex === null}
								className={styles.primaryBtn}
							>
								{activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
							</button>
						</div>
					</div>
				)}
				<div className='flex justify-center '>
					<div className='caption absolute bottom-10 sm:bottom-4 max-w-sm text-center m-auto'>
						To better help us formulate an accurate risk factor please consider
						also filling out {''}
						<a href=''>our survey</a>.
					</div>
				</div>
			</div>
		</div>
	);
}
