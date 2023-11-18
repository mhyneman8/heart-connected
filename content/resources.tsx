interface Resources {
	key: string;
	imgSrc: string;
	width: number;
	height: number;
	link: string;
	text: string;
	description: string;
}
interface ResourceType {
	socio: Resources[];
	educ: Resources[];
	therapy: Resources[];
}

const resources: ResourceType = {
	socio: [
		{
			key: 'c',
			imgSrc: '',
			width: 30,
			height: 30,
			link: '',
			text: '',
			description:
				'Having concerns about finances are completely normal. Whether you are looking for help with medical bills, travel, or any number of other expenses associated with caring for your child or are looking to give back to help another family or fund CHD research, consider exploring the following organizations.',
		},
		{
			key: 'ohhf',
			imgSrc: '/OHHF_logo.png',
			width: 20,
			height: 20,
			link: 'https://theohhf.org/',
			text: 'Ollie Hinkle Heart Foundation',
			description:
				'A foundation created by a parents affected by CHD for families affected by CHD. Their mission is to address unmet needs, including financial assistance, mental health resources and community support across the US. Whether you are looking for help with your current experience or are interested in giving back through financial support or community engagement the is a fantastic organization to look into to.',
		},
		{
			key: 'lch',
			imgSrc: '/lch-logo.png',
			width: 20,
			height: 20,
			link: 'https://www.luriechildrens.org/en/specialties-conditions/complex-congenital-heart-disease-care-center/',
			text: "Lurie Children's Hospital",
			description:
				'Lurie is a nationally recognized heart center with a renowned interventional radiology program. Like CHOP the also treat both the congenital and acquired heart conditions. This link will take you to there Complex Congenital Heart Disease page where they provide information regarding the conditions they treat most frequently.',
		},
		{
			key: 'hdf',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://www.heartfeltdreamsfoundation.org/',
			text: 'Heartfelt Dreams Foundation (New England area) ',
			description:
				'A foundation started by an complex CHD survivor that aims to give back through advocacy, education promotion, and financial support to the New England area of the United States. If you are in the NE or may find yourself going to Boston for care, this a great organization to help making planning easier. They also accept donations for improvements in care and education about CHD.',
		},
		{
			key: 'chf',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://www.childrensheartfoundation.org/',
			text: "Children's Heart Foundation ",
			description:
				'A long-standing foundation created by parents affected by CHD, who support CHD research and scientific advancement through fundraising. If you are interested in helping the CHD-focused medical community continue their search for understanding and development of diagnostic and treatments modalities, consider supporting this organization.',
		},
	],
	educ: [
		{
			key: 'aha',
			imgSrc: '/aha-logo.png',
			width: 20,
			height: 20,
			link: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects',
			text: 'American Heart Association',
			description:
				'The AHA is a national organization the developed the widely used PALS (Pediatric Advanced Life Support) and ACLS (Advanced Cardiac Life Support) guidelines used by healthcare professionals in the US.  This website provides basic information on  a number of heart lesions, along with information regarding heart testing and even what to expect going into surgery and what home care will look like in printable PDF forms in the Tools and Resources tab.',
		},
		{
			key: 'cdc',
			imgSrc: '/cdc-logo.png',
			width: 30,
			height: 30,
			link: 'https://www.cdc.gov/ncbddd/heartdefects/index.html',
			text: 'Center for Disease Control and Prevention',
			description:
				'The CDC is a national organization that provides data driven information and constantly monitoring the quantifiable metrics regarding CHD in the US. They provide good basic overview information regarding CHD and offer prevalence rates for specific defects, however certain aspects can be more dense and may be harder to digest for some. This site is recommended for those who have a better understanding of CHD and are interested in the statistics surrounding them. While certain defects are less common than others though, remember that you are not alone.',
		},
		{
			key: 'chp',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://www.chop.edu/centers-programs/cardiac-center',
			text: "Children's Hospital of Philadelphia",
			description:
				'CHOP is a nationally ranked pediatric cardiac center, which treated a wide range of pediatric heart conditions, both congenital and acquired. This link will bring you their website were you can access educational text and pictures about CHD.',
		},
		{
			key: 'tc',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://www.texaschildrens.org/departments/cardiology/ruby-beau',
			text: "Texas Children's CHD Video Library",
			description:
				"Ranked #1 in the nation for pediatric cardiac surgery, Texas Children's have created an extensive video library showing visual animations regarding numerous heart lesions. Ruby and Beau are a fantastic duo making the comprehension level suitable for children as well, if you have a sibling you would like to better understand that condition, too. ",
		},
	],
	therapy: [
		{
			key: 'dc',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://depthcounseling.org/',
			text: 'Depth Counseling',
			description:
				'Depth Counseling is an organization that provides licensed therapy services in Austin, TX and Chicago, IL and specializes and anxiety and depression with the ability to focus on trauma related counseling. They provide therapy to both the insured and provide sliding-scale therapy as well.',
		},
		{
			key: 'op',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://openpathcollective.org/',
			text: 'Open Path',
			description:
				'Open Path is a national nonprofit collective of licensed therapist who aim to provide affordable therapy to those underinsured or without insurance. They charge between $40-70 per session after a one-time lifetime membership fee.',
		},
		{
			key: 'lo',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: 'https://liveoakchicago.com/',
			text: 'Live Oak',
			description:
				'Live Oak is a Chicago-based organization that aims to provide sustainable, quality counseling services on a sliding-scale with a minimum of $35 per session, whether that be with a licensed counselor or a graduate intern. The strive to practice trauma-informed care and also service individuals with insurance.',
		},
		{
			key: 'hbh',
			imgSrc: '/',
			width: 20,
			height: 20,
			link: '',
			text: 'Howard Brown Health',
			description:
				'Howard Brown Health is a Chicago-based health service partner who provides sliding-scale services with an approach to incorporate primary care services in the loop to help with overall health. They offer psychiatric care and behavioral counseling with a focus on trauma informed care.',
		},
	],
};

export default resources;
