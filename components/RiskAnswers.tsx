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
			let responseArr = [''];
			// parent / severe
			if (
				(types.includes('mother') || types.includes('father')) &&
				types.includes('severe')
			) {
				responseArr.push(Blurb.parentSevere);
			}
			if (types.includes('mother') && types.includes('severe')) {
				responseArr.push(Blurb.mothersevere);
			} else if (types.includes('mother')) responseArr.push(Blurb.mother);

			if (types.includes('mildmod')) responseArr.push(Blurb.mildmod);

			if (
				!types.includes('mother') &&
				!types.includes('father') &&
				types.includes('severe')
			)
				responseArr.push(Blurb.severe);

			// insurance
			if (types.includes('insurance')) responseArr.push(Blurb.insurance);

			// old
			if (types.includes('older')) responseArr.push(Blurb.older);

			// ses
			if (types.includes('lowses')) responseArr.push(Blurb.lowses);
			if (types.includes('midses')) responseArr.push(Blurb.midses);

			// icu
			if (types.includes('icu')) responseArr.push(Blurb.icu);

			// surgery
			if (types.includes('surgery')) responseArr.push(Blurb.surgery);

			// postpartum
			if (types.includes('postpartum')) responseArr.push(Blurb.postpartum);

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
					{responseLevel[level]}
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
