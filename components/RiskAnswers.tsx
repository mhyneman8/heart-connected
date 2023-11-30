import Blurb from '@/content/Blurb';
import { useEffect, useState } from 'react';

type Props = {
	types: string[];
};

export default function RiskAnswer({ types }: Props) {
	const [loading, setLoading] = useState(true);
	const [responses, setResponses] = useState<string[]>([]);

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

			// employment & not mild
			if (types.includes('employ') && !types.includes('mild')) {
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
				<div className='text-center m-auto'>Calculating Your Risk Factors...</div>
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
						{responses.length > 2 && (
							<div>
								You demonstrate multiple risk factors towards developing a
								trauma response. Everything you have learned up to now can be
								overwhelming and this website is designed to help you better
								understand your child&apos;s condition and your perfectly
								natural response to such a big diagnosis. Share this information
								with your healthcare team, loved ones, and reach out to
								the CHD community. It is natural to have dark and negative
								thoughts, but you are not alone! Do not hesitate to ask
								questions and express your feelings. There is a safe space
								waiting for you!
							</div>
						)}

						{responses.length > 1 && responses.length < 3 && (
							<div>
								You demonstrate risk factors towards developing a trauma
								response. Everything you have learned up to now can be
								overwhelming and this website is designed to help you better
								understand your child&apos;s condition and your perfectly
								natural response to such a big diagnosis. Share this information
								with your healthcare team, loved one&apos;s, and reach out to
								the CHD community. Do not hesitate to ask questions and express
								your feelings. Your mental health is important!
							</div>
						)}
						{responses.length < 2 && (
							<div>
								You demonstrate minimal risk factors towards developing a trauma
								response, however you are still encouraged to check-in with
								yourself and your family and utilize any resources you would
								find helpful and join the community and unite with other
								families with CHD.
							</div>
						)}
					</ul>
				</div>
			)}
		</div>
	);
}
