import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import Calc from '@/components/Calc';
import { useState } from 'react';
import styles from '@/components/styles.module.css';
import citations from '@/content/citations';

export default function Calculator() {
	const [showCalculator, setShowCalculator] = useState(false);
	const paragraphStyles = 'mb-3 indent-6';

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
					Our goal is to help you identify individual characteristics that put
					you at increased risk for a trauma-related response, including
					anxiety, depression, and somatization (physical symptoms related to
					distress). Here you will use a tool that pulls from all the latest
					research related to mental and physical responses following a
					traumatic experience to help you better understand your likelihood of
					developing a trauma response. It is our hope that, by utilizing this
					tool, we can help you and your healthcare team recognize and respond
					to your individual risk factors.
				</div>
				<div className={paragraphStyles}>
					The tool provided is not scientifically validated and is for
					informational purposes only. There has yet to be research identifying
					the strength of the risk factors in the calculator, therefore
					attempting to determine overall risk stratification with these
					characteristics is not appropriate. Do not substitute this information
					for professional medical or psychological counseling, diagnosis, or
					treatment. It is designed to provide you and your healthcare team
					evidence-based guidance towards knowing what personal traits expose
					you to a greater risk to a trauma response following the disclosure of
					your child&apos;s CHD diagnosis. As a warning, this information could
					worsen your mental state if you are sensitive to potentially upsetting
					news. By using this tool, you understand and acknowledge that you are
					using this assessment tool at their own discretion and risk. We
					encourage you to talk with your healthcare and loved ones prior to
					accessing the below tool.
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
					should be discussed with qualified healthcare professionals with
					personal knowledge of you and your child&apos;s diagnosis and care
					plan.
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
				{/* {citations} */}
				<div className='font-bold text-xl mt-7'>Citations</div>
				
				<ol className='list-decimal'>
					{citations.map((item, index) => (
						<div key={index}>
							<li className='mt-4 mx-10 text-sm'>
								<div className='inline'>{item.main}<span className='italic'>{item.italic}</span>{item.dates}</div>
							</li>
						</div>
					))}
				</ol>
			</div>
		</div>
	);
}
