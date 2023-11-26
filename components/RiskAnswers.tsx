type Props = {
	score: number;
	valueProps: string[];
};

export default function RiskAnswer({ score, valueProps }: Props) {
	let level;
	if (score < 9) {
		level = 'low';
	} else if (score < 17) {
		level = 'moderate';
	} else {
		level = 'high';
	}
	const responses: Record<string, string> = {
		low: 'You are at low risk to experience a tramatic response',
		moderate: 'You are at moderate risk to experience a tramatic response',
		high: 'You are at moderate risk to experience a tramatic response',
	};

	return (
		<div>
			{responses[level]}
			{valueProps.length > 0 && (
				<ul className='mt-8 list-disc ml-8'>
					{valueProps.map((advice, index) => (
						<li key={index}>{advice}</li>
					))}
				</ul>
			)}
		</div>
	);
}
