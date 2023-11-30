import Blurb from '@/content/Blurb';
import { useEffect, useState } from 'react';

type Props = {
	score: number;
	types: string[];
};

export default function RiskAnswer({ score, types }: Props) {
	const [loading, setLoading] = useState(true);
	const [responses, setResponses] = useState<string[]>([]);

	let level;
	if (score < 9) {
		level = 'low';
	} else if (score < 17) {
		level = 'moderate';
	} else {
		level = 'high';
	}

	const responseLevel: Record<string, string> = {
		low: 'You are at low risk to experience a tramatic response',
		moderate: 'You are at moderate risk to experience a tramatic response',
		high: 'You are at moderate risk to experience a tramatic response',
	};

	useEffect(() => {
		const individualize = () => {
			let responseArr = [];
			// mother / severe
			if (
				types.includes('mother') &&
				types.includes('severe') &&
				types.includes('icu') &&
				(types.includes('ppd') || types.includes('noppd'))
			) {
				responseArr.push(Blurb.mothersevereicu);
			} else if (types.includes('mother') && types.includes('older')) {
				responseArr.push(Blurb.motherolder1);
				responseArr.push(Blurb.motherolder2);
			} else if (types.includes('mother')) {
				responseArr.push(Blurb.mother);
			}

			// father / older
			if (types.includes('father') && types.includes('older')) {
				responseArr.push(Blurb.fatherolder);
			} else if (types.includes('father')) {
				responseArr.push(Blurb.father);
			}

			// sibling / mod/severe
			if (
				types.includes('sibling') &&
				(types.includes('severe') || types.includes('mod'))
			) {
				responseArr.push(Blurb.siblingmodsevere);
			}

			// family
			if (types.includes('family')) {
				responseArr.push(Blurb.family);
			}

			// employment
			if (types.includes('employ')) {
				responseArr.push(Blurb.employment);
			}

			// parent / low ses
			if (
				types.includes('lowses') &&
				(types.includes('mother') || types.includes('father'))
			) {
				responseArr.push(Blurb.parentlowses);
			}

			// severe / icu
			if (
				types.includes('severe') &&
				types.includes('icu') &&
				!types.includes('surgery')
			) {
				responseArr.push(Blurb.severeicu);
			}

			// severe/ icu / surgery
			if (
				types.includes('severe') &&
				types.includes('icu') &&
				types.includes('surgery')
			) {
				responseArr.push(Blurb.severeicusurgery);
			}

			if (types.includes('fed')) {
				responseArr.push(Blurb.breastfed);
			}

			return responseArr;
		};
		const responseArr = individualize();

		setResponses(responseArr);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [types]);

	return (
		<div>
			{loading ? (
				<div>Calculating Your Risk Factors...</div>
			) : (
				<div>
					<div>
						You&apos;ve started or will soon begin, the journey of parenting a
						child with CHD, which can be daunting. Your presence here reflects
						your strength to confront challenges and create positive change for
						both you and your family. Regardless of which path you choose or
						resources you utilize, remember you&apos;re not alone. This
						community, along with its advocates, is here to support you every
						step of the way!
					</div>
					{/* {responseLevel[level]} */}
					<ul className='mt-8 list-disc ml-8'>
						{responses.map((result, index) => (
							<li
								className='mb-3'
								key={index}
							>
								{result}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
