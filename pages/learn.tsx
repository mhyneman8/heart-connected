import ExternalLink from '@/components/ExternalLink';
import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import overview from '../content/learnOverview';
import Tooltip from '../components/Tooltip';
import VideoModal from '@/components/VideoModal';
import { useState } from 'react';
import info from '../assets/info.svg';

export default function Learn() {
	const [showVideo, setShowVideo] = useState(false);
	const [showVideo2, setShowVideo2] = useState(false);
	const videoBoxStyles =
		'h-72 w-full max-w-sm relative video items-center flex justify-center text-center m-auto mb-5 hover:cursor-pointer';
	const textBoxStyles =
		'h-72 w-full z-20 max-w-sm flex-col bg-teal flex text-4xl text-white rounded-lg justify-center items-center px-4 text-center m-auto hover:opacity-0 transition ease-in-out duration-500 bg-teal absolute top-0';
	const paraStyles = 'para pt-8';
	return (
		<div className='max-w-[1000px] m-auto'>
			<Navigation />
			<Heading
				credit={''}
				imgSrc={'/header_imgs/Reading_Education.jpg'}
				heading='What is Congenital Heart Disease?'
			/>

			<div className='body text-black md:px-10 px-5 flex justify-center flex-col max-w-[900px] m-auto'>
				<h3 className='font-bold mb-6 text-center'>
					Structural{' '}
					<Tooltip
						image='/heart_learn_pics/Normal.jpg'
						imgAlt=''
						text='The anatomical heart consists of four chambers. The upper chambers, or atria, which receive blood from the body and lungs; and the lower chambers, or ventricles, which send blood to the body and the lungs. The heart functions as the pump and connection between these two different systems to obtain oxygen from the lungs and deliver it to all the other organs, like the brain, stomach, kidneys, and more. In normal anatomy, the right atrium receives blood from the body and directs it to the right ventricle which sends blood via the pulmonary arteries to the lungs for oxygenation. The left atrium receives oxygen-rich blood, directing it to the left ventricle which sends the blood via the aorta to the rest of the body.'
					>
						Heart Development{' '}
					</Tooltip>{' '}
					in a Nutshell:
				</h3>
				<div className='flex-col font-base justify-center flex md:max-w-[70%] sm:max-w-[90%] mx-auto para'>
					Congenital heart disease is an umbrella term that describes a group of
					structural heart abnormalities that are present at the time of birth.
					This page will provide a concise overview of the early stages of fetal
					heart development and when and where some defects develop. In this
					section, we will explore the following topics:
					<ul className='list-disc mt-3 indent-0'>
						{overview.map((subject) => (
							<li
								key={subject.title}
								className='mb-2 ml-8'
							>
								<span className='font-bold'>{subject.title}</span>
								{subject.content}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-row pt-8 justify-center'>
					<p className='para font-base'>
						Early cardiac development begins with single triple-layer pipe that
						twists and folds upon itself creating a heart tube with an arterial
						and venous pole and slow rhythmic contractions. Soon after the four
						chambers begin to differentiate, and the pulmonary vessels form and
						attach to the left atrium.
					</p>
				</div>
				<div className={paraStyles}>
					<p className='my-auto'>
						Inappropriate attachment of the pulmonary veins leads to a complex
						cardiac lesion, called{' '}
						<Tooltip
							text='Totally anomalous pulmonary venous return (TAPVR) is a lesion that results from inappropriate placement of the pulmonary veins (vessels returning blood to the left atrium). The severity of this defect depends on the attachment of the veins, as they can fuse to the vena cava (the large vein returning blood to the right atrium), either above or below the heart, or to a different chamber of the heart itself.'
							image='/heart_learn_pics/TAPVR.jpg'
							imgAlt=''
						>
							TAPVR (totally anomalous pulmonary venous return),
						</Tooltip>{' '}
						whose severity depends their exact attachment location.
					</p>
				</div>
				<p className={paraStyles}>
					Then the electrical conduction system matures followed by complete
					division of the four heart chambers, turning a single bloodstream into
					distinct pulmonary and systemic loops with the heart being the go
					between. This is a result of cushions that fuse and form the walls
					separating the heart chambers.
				</p>
				<p className={paraStyles}>
					During the formation of interatrial and interventricular septations
					incomplete closure can occur resulting in atrial and/or ventricular
					septal defects (
					<Tooltip
						text='Septal, or wall, defects can form between either the atria (ASD) or the ventricles (VSD). These lesions, if isolated, are generally less severe, but still result in shunting (misdirected blood flow).'
						image='/heart_learn_pics/ASD.jpg'
						imgAlt=''
						image2='/heart_learn_pics/VSD.jpg'
						img2Alt=''
					>
						ASD and VSD
					</Tooltip>
					, respectively).
				</p>
				<p className={paraStyles}>
					While these defects are usually considered non-severe (or acyanotic),{' '}
					<Tooltip
						image='/heart_learn_pics/TOF.jpg'
						imgAlt=''
						text='Tetralogy of Fallot is a lesion that, while complex with 4 identifiable features, can simply be thought of as  a ventricular septal defect which formed from a ventricular septum that pushed into the right ventricle. This inappropriate placement leads to the other 3 distinguishing features. It pushes the aorta into the right ventricle causing pulmonary artery stenosis (narrowing) and straining the right ventricle resulting in hypertrophy (enlargement)'
					>
						Tetrology of Fallot (ToF)
					</Tooltip>{' '}
					is a complex VSD with additional features stemming from the exact
					location of the lesion.
				</p>
				<p className='mt-8 para font-base'>
					After complete chamber differentiation and septum formation, the
					outflow tracts (i.e., aorta and pulmonary arteries) develop and this
					is where defects including{' '}
					<Tooltip
						image='/heart_learn_pics/TGA.jpg'
						imgAlt=''
						text='Transposition of the great arteries is a severe lesion that occurs when the aorta (leads to body) and the pulmonary artery (leads to lungs) are attached to the wrong ventricle.This means the body and the lungs circulations are separated from each other and oxygen-rich blood cannot reach other organs. There are other types of TGA, which sees the ventricles transposed while the arteries are in appropriate placement, and while this sounds better it can lead to its own host of issues.'
						image2='/heart_learn_pics/DORV.jpg'
						img2Alt=''
						text2='Double outlet right ventricle (DORV) is a condition where both the pulmonary arteries and aorta are connected to the right ventricle. This can occur with under-development of the left ventricle, inappropriate alignment of the interventricular wall, or a reduced pulmonary artery size.'
					>
						transposition of the great arteries (TGA)
					</Tooltip>
					, double outlet right ventricle (DORV) , and pulmonary atresia occur.
				</p>

				<p className='mt-8 para font-base'>
					Inappropriate outflow development can also lead to misplacement of the
					coronary artery (vessels supplying the heart muscle). In the final
					stages of structural development, atrioventricular (AV) and semi-lunar
					valves form. Valve formation defects include{' '}
					<Tooltip
						text="Ebstein's anomaly is a malformation of the tricuspid valve (connection between the right atrium and ventricle). Its large and inappropriate formation and alignment leads to backwards flow causing inefficient circulation into and through the pulmonary vessels."
						image='/heart_learn_pics/Ebstein.jpg'
						imgAlt=''
					>
						Ebstein&apos;s anomaly{' '}
					</Tooltip>{' '}
					or a bicuspid (two leaf, rather than the expected three leaf) aortic
					valve, which can present with early tricuspid incompetency, aortic
					calcification, and/or heart failure.{' '}
					<a
						href='#citation'
						className='text-[8px] align-super'
					>
						1
					</a>
				</p>
				<p className={paraStyles}>
					For more details pertaining to the development of a specific lesion
					please visit the&#160;
					<ExternalLink
						link='https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects'
						name="American Heart Association's"
					/>
					&#160;or&#160;
					<ExternalLink
						link='https://www.cdc.gov/ncbddd/heartdefects/index.html'
						name="Center for Disease Control and Prevention's"
					/>
					&#160;website. You can also view a visual representation of the
					developing heart below.
				</p>
			</div>

			{showVideo && (
				<VideoModal
					setShowVideo={setShowVideo}
					title={'Congenital Heart Defects Explained: Tetralogy of Fallot'}
					video={'ICwr5bXfwDo'}
					credit={"Children's Healthcare of Atlanta"}
				/>
			)}
			{showVideo2 && (
				<VideoModal
					setShowVideo={setShowVideo2}
					title={'Development of the ventricles and large arterial vessels'}
					video={'4H-dSo6IhrM'}
					credit={'Icardio'}
				/>
			)}
			<div className='video-wrapper flex flex-col justify-center  lg:flex-row mb-20 mt-20'>
				<div className={videoBoxStyles}>
					<button onClick={() => setShowVideo(true)}>
						<div className={textBoxStyles}>
							Congenital Heart Defects Explained: Tetralogy of Fallot
						</div>
						<div className='z-10 justify-center align-center flex'>
							<Image
								src='/video_stills/tetralogy.png'
								width={284}
								height={100}
								alt='Congenital Heart Defects Explained: Tetralogy of Fallot'
								className='rounded-lg'
							/>
							<Image
								src='/video_stills/play.png'
								width={100}
								height={100}
								alt=''
								className='absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2'
							/>
						</div>
						<div className='text-xs text-left'>
							Learning that your child has a congenital heart defect like
							Tetralogy of Fallot can be scary. At the Children&apos;s
							Healthcare of Atlanta Heart Center, our team of experts is here to
							provide care for children with Tetralogy of Fallot and provide the
							best care possible so that they can live healthy lives.
						</div>
					</button>
				</div>
			</div>
			<div className='video-wrapper flex flex-col justify-center lg:flex-row mb-20 mt-20'>
				<div className={videoBoxStyles}>
					<button onClick={() => setShowVideo2(true)}>
						<div className={textBoxStyles}>
							Development of the ventricles and large arterial vessels
						</div>
						<div className="z-10 justify-center align-center flex'">
							<Image
								src='/video_stills/development.png'
								width={384}
								height={200}
								alt='Development of the ventricles and large arterial vessels'
								className='rounded-lg'
							/>
							<Image
								src='/video_stills/play.png'
								width={100}
								height={100}
								alt=''
								className='absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2'
							/>
						</div>
						<div className='text-sm text-left'>
							Watch the development of the ventricles and large arterial vessels
						</div>
					</button>
				</div>
			</div>
			<div id='citation'>
				<ol className='list-decimal m-20 text-xs'>
					<li>
						Buijtendijk MFJ, Barnett P, van den Hoff MJB. Development of the
						human heart. <span className='italic'>American Journal of Medical Genetics</span>. 2020; 184(1):7-22
					</li>
				</ol>
			</div>
		</div>
	);
}
