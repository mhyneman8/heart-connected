import ExternalLink from '@/components/ExternalLink';
import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import YouTubePlayer from '@/components/YouTubePlayer';
import Image from 'next/image';
import overview from '../content/learnOverview';
import Tooltip from '../components/Tooltip';

// rollover to compare normal heart, make all our examples like this http://www.pted.org/?id=doubleoutlet1

export default function Learn() {
	return (
		<div className="max-w-[1000px] m-auto">
			<Navigation />
			<Heading credit={''} imgSrc={'/pics/Reading_Education.jpg'} heading='What is Congenital Heart Disease?' />

			<div className='body text-black px-10'>
				<h3 className='font-bold mb-6 text-center'>
					Structural{' '}
					<Tooltip
						image='/heartpics/Normal.jpg'
						imgAlt=''
						text='The anatomical heart consists of four chambers. The upper chambers, or atria, which receive blood from the body and lungs; and the lower chambers, or ventricles, which send blood to the body and the lungs. The heart functions as the pump and connection between these two different systems to obtain oxygen from the lungs and deliver it to all the other organs, like the brain, stomach, kidneys, and more. In normal anatomy, the right atrium receives blood from the body and directs it to the right ventricle which sends blood via the pulmonary arteries to the lungs for oxygenation. The left atrium receives oxygen-rich blood, directing it to the left ventricle which sends the blood via the aorta to the rest of the body.'
					>
						Heart Development{' '}
					</Tooltip>{' '}
					in a Nutshell:
				</h3>
				<div className='flex-col justify-center flex max-w-[70%] mx-auto'>
					This page will give you a concise overview of the early stages of
					cardiac development and the formation of structural heart defects. In
					this section, we will explore the following topics:
					<ul className='list-disc mt-3'>
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
				<div className='flex flex-row py-10 justify-center'>
					<p className=''>
						Early cardiac development begins with single triple-layer pipe that
						twists and folds upon itself creating a heart tube with an arterial
						and venous pole and slow rhythmic contractions. Soon after the four
						chambers begin to differentiate, and the pulmonary vessels form and
						attach to the left atrium.
					</p>
					{/* <Image
						src='https://www.mechanobio.info/wp-content/uploads/2017/06/stages-of-cardiac-development.jpg'
						width={150}
						height={150}
						alt='Stages of heart development'
						className=''
					/> */}
				</div>
				<div className='py-5'>
					{/* <Image
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tapv-575px.jpg/300px-Tapv-575px.jpg'
						width={250}
						height={150}
						alt='TAPVR'
						className=''
					/> */}
					<p className='my-auto'>
						Inappropriate attachment of the pulmonary veins leads to a complex
						cardiac lesion, called{' '}
						<Tooltip
							text='Totally anomalous pulmonary venous return (TAPVR) is a lesion that results from inappropriate placement of the pulmonary veins (vessels returning blood to the left atrium). The severity of this defect depends on the attachment of the veins, as they can fuse to the vena cava (the large vein returning blood to the right atrium), either above or below the heart, or to a different chamber of the heart itself.'
							image='/heartpics/TAPVR.jpg'
							imgAlt=''
						>
							TAPVR (totally anomalous pulmonary venous return),
						</Tooltip>{' '}
						whose severity depends their exact attachment location.
					</p>
				</div>
				<p className=''>
					Then the electrical conduction system matures followed by complete
					division of the four heart chambers, turning a single bloodstream into
					distinct pulmonary and systemic loops with the heart being the go
					between. This is a result of cushions that fuse and form the walls
					separating the heart chambers.
				</p>
				<p className='mt-10'>
					During the formation of interatrial and interventricular septations
					incomplete closure can occur resulting in atrial and/or ventricular
					septal defects (
					<Tooltip
						text='Septal, or wall, defects can form between either the atria (ASD) or the ventricles (VSD). These lesions, if isolated, are generally less severe, but still result in shunting (misdirected blood flow).'
						image='/heartpics/ASD.jpg'
						imgAlt=''
						image2='/heartpics/VSD.jpg'
						img2Alt=''
					>
						ASD and VSD
					</Tooltip>
					, respectively).
				</p>
				{/* <Image
					src='https://www.tourmyindia.com/medical-tourism/uploads/procedure/images/37f154c6feba39ae9fab3f31f5923c8f.jpg'
					width={550}
					height={150}
					alt='atrial and ventricular septal defects'
					className='m-auto py-10'
				/> */}
				<p className=''>
					While these defects are usually considered non-severe (or acyanotic),{' '}
					<Tooltip
						image='/heartpics/TOF.jpg'
						imgAlt=''
						text='Tetralogy of Fallot is a lesion that, while complex with 4 identifiable features, can simply be thought of as  a ventricular septal defect which formed from a ventricular septum that pushed into the right ventricle. This inappropriate placement leads to the other 3 distinguishing features. It pushes the aorta into the right ventricle causing pulmonary artery stenosis (narrowing) and straining the right ventricle resulting in hypertrophy (enlargement)'
					>
						Tetrology of Fallot (ToF)
					</Tooltip>{' '}
					is a complex VSD with additional features stemming from the exact
					location of the lesion.
				</p>
				{/* <Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tetralogy_of_Fallot.svg/1200px-Tetralogy_of_Fallot.svg.png'
					width={450}
					height={150}
					alt='Tetrology of Fallot'
					className='m-auto py-10'
				/> */}
				<p className='mt-8'>
					After complete chamber differentiation and septum formation, the
					outflow tracts (i.e., aorta and pulmonary arteries) develop and this
					is where defects including{' '}
					<Tooltip
						image='/heartpics/TGA.jpg'
						imgAlt=''
						text='Transposition of the great arteries is a severe lesion that occurs when the aorta (leads to body) and the pulmonary artery (leads to lungs) are attached to the wrong ventricle.This means the body and the lungs circulations are separated from each other and oxygen-rich blood cannot reach other organs. There are other types of TGA, which sees the ventricles transposed while the arteries are in appropriate placement, and while this sounds better it can lead to its own host of issues.'
					>
						transposition of the great arteries (TGA)
					</Tooltip>
					,{' '}
					<Tooltip
						image='/heartpics/DORV.jpg'
						imgAlt=''
						text='Double outlet right ventricle (DORV) is a condition where both the pulmonary arteries and aorta are connected to the right ventricle. This can occur with under-development of the left ventricle, inappropriate alignment of the interventricular wall, or a reduced pulmonary artery size.'
					>
						double outlet right ventricle (DORV)
					</Tooltip>
					, and pulmonary atresia occur.
				</p>

				<p className='mt-8'>
					Inappropriate outflow development can also lead to misplacement of the
					coronary artery (vessels supplying the heart muscle). In the final
					stages of structural development, atrioventricular (AV) and semi-lunar
					valves form. Valve formation defects include{' '}
					<Tooltip
						text='Ebstein’s anomaly is a malformation of the tricuspid valve (connection between the right atrium and ventricle). Its large and inappropriate formation and alignment leads to backwards flow causing inefficient circulation into and through the pulmonary vessels.'
						image='/heartpics/Ebstein.jpg'
						imgAlt=''
					>
						Ebstein&apos;s anomaly{' '}
					</Tooltip>{' '}
					or a bicuspid (two leaf, rather than the expected three leaf) aortic
					valve, which can present with early tricuspid incompetency, aortic
					calcification, and/or heart failure. (Buijtendijk et al., 2020)
				</p>
				<p className=' mt-10'>
					For more details pertaining to the development of a specific lesion
					please visit the&#160;
					<ExternalLink
						link='https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects'
						name='AHA'
					/>
					&#160;or&#160;
					<ExternalLink
						link='https://www.cdc.gov/ncbddd/heartdefects/index.html'
						name='CDC'
					/>
					&#160;website. You can also view a visual representation of the
					developing heart below.
				</p>
			</div>

			{/* <div className="video m-auto my-5 w-1/2">
                <YouTubePlayer videoId="ICwr5bXfwDo" />
                <div className="caption text-center mt-1">Congenital Heart Defects Explained: Tetralogy of Fallot</div>
            </div> */}
			<div className='video m-auto my-5 w-1/2'>
				<YouTubePlayer videoId='4H-dSo6IhrM' />
				<div className='caption text-center mt-1'>
					Development of the ventricles and large arterial vessels
				</div>
			</div>
		</div>
	);
}
