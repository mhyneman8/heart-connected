import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import Calc from '@/components/Calc';
import { useState } from 'react';
import styles from '../components/styles.module.css';

export default function Calculator() {
	const [showCalculator, setShowCalculator] = useState(false);
	const paragraphStyles = 'mb-3';

	const handleCalcOpen = () => {
		setShowCalculator(true);
		document.querySelector('body')!.style.overflow = 'hidden';
	};

	return (
		<div className='max-w-[1000px] m-auto'>
			<Navigation />

			<Heading
				credit={''}
				imgSrc={'/header_imgs/Group-sunlight.jpg'}
				heading='Trauma Risk Factors'
			/>

			<div
				id='body'
				className='body px-10 mt-[-20px] max-w-[900px] mb-20 flex justify-center flex-col m-auto'
			>
				<div className={paragraphStyles}>
					Our goal is to develop a risk assessment tool that will help you and
					your healthcare providers identify the right resources for your unique
					situation that will influence your experience with the most common
					group of defects present at the birth of your child. In time, this
					risk assessment will be able to lighten at least some of the struggles
					that are often experienced when taking care of a child with CHD
				</div>
				<div className={paragraphStyles}>
					The calculator is provided is not a validated tool and is for
					informational purposes only. Do not substitute this information for
					professional medical or psychological counseling, diagnosis, or
					treatment. It is designed to offer a rough estimate of potential risk
					factors related to trauma response following a CHD diagnosis. Users of
					the calculator understand and acknowledge that they are using it at
					their own discretion and risk.
				</div>
				<div className={paragraphStyles}>
					<span className='font-bold'>
						The calculator does not provide medical or psychological advice,
						diagnosis, or treatment recommendations.
					</span>{' '}
					{''}
					Users should not interpret the results of the calculator as a
					definitive assessment of their condition or the condition of their
					child. Any concerns or questions regarding health or mental health
					should be discussed with qualified healthcare professionals.
				</div>
				<div className={paragraphStyles}>
					<div className='font-bold mt-8'>Limitations of the calculator:</div>
					<ul className='list-disc ml-5 max-w-[600px]'>
						<li className='pb-2'>
							The calculator is based on generalized risk factors and weightings
							and may not accurately reflect individual circumstances.
						</li>
						<li className='pb-2'>
							It does not account for all potential risk factors and does not
							take into consideration the unique complexities of each situation.
						</li>
						<li>
							The calculator does not guarantee accuracy, completeness, or
							reliability.
						</li>
					</ul>
				</div>
				{showCalculator ? (
					<Calc setShowCalculator={setShowCalculator} />
				) : (
					<div className='w-full flex justify-center my-8'>
						<button
							className={styles.primaryBtn}
							onClick={() => handleCalcOpen()}
						>
							Identify Your Trauma Response Risk Factors
						</button>
					</div>
				)}
				<div className={paragraphStyles}>
					*This is a simplified model and should not be used as a diagnostic
					tool. It&apos;s important to note that the actual risk assessment for
					trauma response can be far more complex and may require input from
					healthcare professionals, including psychologists or psychiatrists.
					Additionally, individual experiences can vary widely, and some factors
					not included in this model may also influence the risk of trauma
					response.
				</div>
				<div className={paragraphStyles}>
					The purpose of such a calculator would be to provide a rough estimate
					rather than a definitive assessment.
				</div>
			</div>
		</div>
	);
}
