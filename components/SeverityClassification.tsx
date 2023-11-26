import { useState } from 'react';
import styles from '@/components/styles.module.css';

export default function SeverityClassification() {
	const [showChart, setShowChart] = useState(false);

	const cyanotic = [
		'Transposition of the great arteries',
		'ToF, including pulmonary atresia and absent pulmonary valve',
		'Hypoplastic right heart',
		'Hypoplastic left heart',
		'Single ventricle',
		'Double outlet right ventricle',
		'Truncus arteriosus',
		'TAPVR',
		'Critical pulmonary stenosis',
		'Miscellaneous lesions, not specified elsewhere (e.g., doubleoutlet left ventricle)',
	];
	const acyanotic = [
		'Atrioventricular septal defect',
		'Large VSD',
		'Large PDA',
		'Critical or severe aortic stenosis',
		'Critical coarctation',
	];

	const moderate = [
		'Mild or moderate aortic stenosis or incompetence',
		'Moderate pulmonary stenosis or incompetence',
		'Noncritical coarctation',
		'Large ASD',
		'Complex forms of VSD',
	];

	const mild = [
		'Small VSD',
		'Small PDA',
		'Mild pulmonary stenosis',
		'Bicuspid aortic valve without aortic stenosis or incompetence (may worsen)',
		'mall or spontaneously closed ASD',
	];

	return (
		<div>
			{showChart ? (
				<div className='w-full'>
					<div className='opacity-50 bg-black fixed inset-0 z-40 overflow-hidden'></div>

					<div className='absolute bg-white z-50 top-0 left-0 p-10 w-full '>
						<div className='font-bold text-xl mb-4 border-b-2 pb-2'>
							CHD Classification System
							<a
								href='#citation'
								className='text-[8px] ml-1 align-super'
							>
								1
							</a>
						</div>
						<button
							className='absolute top-10 right-10'
							onClick={() => setShowChart(false)}
						>
							X
						</button>
						<div className='row flex flex-row border-b-2 pb-8'>
							<div className='level font-bold min-w-[70px]'>Severe</div>
							<div className='gap-4 flex flex-col ml-8'>
								<div className='types'>
									<div className='title'>1. All cyanotic heart disease</div>
									<div className='examples ml-8'>
										<ol className='list-disc'>
											{cyanotic.map((type, index) => (
												<li key={index}>{type}</li>
											))}
										</ol>
									</div>
								</div>
								<div className='types'>
									<div className='title'>2. Acyanotic lesions</div>
									<div className='examples ml-8'>
										<ol className='list-disc'>
											{acyanotic.map((type, index) => (
												<li key={index}>{type}</li>
											))}
										</ol>
									</div>
								</div>
							</div>
						</div>
						<div className='row flex flex-row border-b-2 pb-8 pt-8'>
							<div className='level font-bold min-w-[70px]'>Moderate</div>
							<div className='types flex flex-col'>
								<div className='title ml-8'>
									<ol className='list-decimal'>
										{moderate.map((type, index) => (
											<li key={index}>{type}</li>
										))}
									</ol>
								</div>
							</div>
						</div>
						<div className='row flex flex-row border-b-2 pb-8 pt-8'>
							<div className='level font-bold min-w-[70px]'>Mild</div>
							<div className='types flex flex-col'>
								<div className='title ml-8'>
									<ol className='list-decimal'>
										{mild.map((type, index) => (
											<li key={index}>{type}</li>
										))}
									</ol>
								</div>
							</div>
						</div>
						<div className='p-4 flex justify-center'>
							<button
								onClick={() => setShowChart(false)}
								className={styles.primaryBtn}
							>
								Close
							</button>
						</div>
						<div
							id='citation'
							className='text-xs mt-3'
						>
							1. Hoffman JI, Kaplan S. The incidence of congenital heart
							disease. J Amer Coll Cardiology. 2002;39(10):1890-1900
						</div>
					</div>
				</div>
			) : (
				<div>
					<button
						className={styles.secondaryBtn}
						onClick={() => setShowChart(true)}
					>
						Classification
					</button>
				</div>
			)}
		</div>
	);
}
