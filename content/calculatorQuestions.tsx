type Choices = [string, number, string?];

interface CalcQuestions {
	question: string;
	questionNumber: number;
	choices: Choices[];
}

const calcQuestions: CalcQuestions[] = [
	{
		question:
			'Which of the following defines your relationship to your family member with CHD.',
		questionNumber: 1,
		choices: [
			['Birthing Parent', 1, 'mother'],
			['Co-Parent', 0, 'father'],
			['Sibling', 0, 'sibling'],
			['Extended Family', 0, 'family'],
		],
	},
	{
		question: 'What is your current age?',
		questionNumber: 2,
		choices: [
			['Below 25', 0],
			['26-35', 0],
			['36 or older', 2, 'older'],
		],
	},
	{
		question: 'What is your current employment status?',
		questionNumber: 3,
		choices: [
			['Employed with benefits', 0, 'employ'],
			['Employed without benefits', 0, 'employ'],
			['Self-employed (Self-pay benefits)', 0, 'employ'],
			['Not currently employed', 2, 'employ'],
			['N/A', 0],
		],
	},
	{
		question: 'Please select the esitmated yearly household income.',
		questionNumber: 4,
		choices: [
			['Less than 24k', 3, 'lowses'],
			['24k - 75k', 0, 'lowses'],
			['75k-121k', 0],
			['More than 121k', 0],
			['N/A', 0],
		],
	},
	{
		question:
			'Based on the provided classification, what severity of CHD does your family member have?',
		questionNumber: 5,
		choices: [
			['Mild', 1, 'mild'],
			['Moderate', 2, 'mod'],
			['Severe', 3, 'severe'],
		],
	},
	{
		question:
			'Has your child/family member, or have you been told your child/family member will spend time in the ICU?',
		questionNumber: 6,
		choices: [
			['No', 0],
			['Yes', 2, 'icu'],
			["I don't know", 0],
		],
	},
	{
		question:
			'Has your family member had or are they expected to require surgical correction of their heart lesion?',
		questionNumber: 7,
		choices: [
			['Yes', 2, 'surgery'],
			['No', 0],
		],
	},
	{
		question:
			'For birthing parents only: Have you experienced difficulties with breastfeeding your child?',
		questionNumber: 8,
		choices: [
			['Yes', 1, 'fed'],
			['No', 0, 'fed'],
			['N/A', 0],
		],
	},
	{
		question:
			'Birthing parent only: Have you been diagnosed with postpartum depression after the birth of your child with CHD?',
		questionNumber: 9,
		choices: [
			['Yes', 2, 'ppd'],
			['No', 0, 'noppd'],
			['N/A', 0],
		],
	},
];

export default calcQuestions;
