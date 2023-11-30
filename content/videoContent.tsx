interface Video {
	copy: string;
	caption: string;
    imgSrc: string;
}

const videoContent: Video[] = [
	{
		copy: 'Living with Congenital Heart Disease',
        caption: 'A snapshot of the lived experience of patients with congenital heart disease, with a particular focus on the journey of patients born with a single ventricle who have since had the Fontan procedure.',
        imgSrc: '/video_stills/living-with-CHD.png',
	},
	{
        copy: 'Day in the Life with CHD',
        caption: 'This video is in collaboration with Team Heart on Youtube who is a group of CHD warriors. This is a glimpse into my life living with a Congenital Heart Defect(CHD). I was born with Tricuspid Atresia.',
        imgSrc: '/video_stills/day-in-the-life.png',
	},
	{
        copy: 'Welcome to the World of CHD',
        caption: 'Throughout heart month our family worked to create this video to help raise awareness of Congenital Heart Disease (CHD) in honor of all the heart warriors fighting here on earth and all those watching form heaven.',
        imgSrc: '/video_stills/world-of-chd.png',
	},
	
];

export default videoContent;
