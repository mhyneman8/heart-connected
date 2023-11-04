interface Resources {
	key: string;
	imgSrc: string;
	width: number;
	height: number;
	link: string;
	text: string;
	description: string;
}

const resources: Resources[] = [
	{
		key: 'aha',
		imgSrc: '/aha-logo.png',
		width: 40,
		height: 40,
		link: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects',
		text: 'American Heart Association',
		description:
			'Find comprehensive information about congenital heart defects, including their causes, symptoms, and treatment options. This site also offers resources and support for individuals and families affected by congenital heart defects, including advice on managing the condition and living a healthy life.',
	},
	{
		key: 'cdc',
		imgSrc: '/cdc-logo.png',
		width: 40,
		height: 40,
		link: 'https://www.cdc.gov/ncbddd/heartdefects/index.html',
		text: 'Center for Disease Control and Prevention',
		description: '',
	},
	{
		key: 'lch',
		imgSrc: '/lch-logo.png',
		width: 40,
		height: 40,
		link: 'https://www.luriechildrens.org/en/specialties-conditions/complex-congenital-heart-disease-care-center/',
		text: "Lurie Children's Hospital",
		description: '',
	},
	{
		key: 'mh',
		imgSrc: '/mh-logo.png',
		width: 40,
		height: 40,
		link: 'https://mendedhearts.org/',
		text: 'Mended Hearts',
		description: '',
	},
	{
		key: 'ohhf',
		imgSrc: '/OHHF_logo.png',
		width: 30,
		height: 30,
		link: 'https://theohhf.org/',
		text: 'Ollie Hinkle Heart Foundation',
		description: '',
	},
	{
		key: 'sch',
		imgSrc: '/standford-logo.png',
		width: 30,
		height: 30,
		link: 'https://www.stanfordchildrens.org/en/topic/default?id=congenital-heart-disease-90-P02346',
		text: "Standford Children's Hospital",
		description: '',
	},
];

export default resources;
