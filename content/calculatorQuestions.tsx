type Choices = [string, number];

interface CalcQuestions {
	question: string;
	questionNumber: number;
	choices: Choices[];
}

const calcQuestions: CalcQuestions[] = [
	{
		question: 'Which of the following defines your relationship to your family member with CHD.',
		questionNumber: 1,
		choices: [
			['Mother', 1],
			['Father', 0],
			['Sibling', 0],
			['Extended Family', 0],
		],
	},
	{
		question: 'What is your current age?',
		questionNumber: 2,
		choices: [
			['Below 25', 0],
			['26-35', 0],
			['36 or older', 2],
		],
	},
	{
		question: 'What is your current employment status?',
		questionNumber: 3,
		choices: [
			['Employed with benefits', 0],
			['Employed without benefits', 0],
			['Self-employed (Self-pay benefits)', 0],
			['Not currently employed', 2],
		],
	},
	{
		question: 'Please select the esitmated yearly household income.',
		questionNumber: 4,
		choices: [
			['Less than 24k', 3],
			['24k - 75k', 0],
			['75k-121k', 0],
			['More than 121k', 0],
		],
	},
	{
		question: 'Based on the provided classification, what severity of CHD does your family member have?',
		questionNumber: 5,
		choices: [
			['Mild', 1],
			['Moderate', 2],
			['Severe', 3],
		],
	},
	{
		question: 'How much time have you and/or your family member with CHD spend in the Intensive Care Unt since birth?',
		questionNumber: 6,
		choices: [
			['0-1 week', 1],
			['1-2 weeks', 2],
			['more than 2 weeks', 3],
		],
	},
	{
		question: 'Has your family member had or are they expected to require surgical correction of their heart lesion?',
		questionNumber: 7,
		choices: [
			['Yes', 2],
			['No', 0],
		],
	},
	{
		question: 'For caretakers only: Have you experienced difficulties with breastfeeding your child?',
		questionNumber: 8,
		choices: [
			['Yes', 1],
			['No', 0],
			['N/A', 0],
		],
	},
	{
		question:
			'Birthing parent only: Have you been diagnosed with postpartum depression after the birth of your child with CHD?',
		questionNumber: 9,
		choices: [
			['Yes', 2],
			['No', 0],
			['N/A', 0],
		],
	},
];

export default calcQuestions;
