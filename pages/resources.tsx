import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import ExternalLink from '@/components/ExternalLink';
import ImageNext from 'next/image';
import resources from '../content/resources';

export default function Resources() {
	return (
		<div>
			<Navigation />
			<Heading heading='Resources for Those With Congenital Heart Disease' />

			<div className='body flex flex-col justify-center mb-8'>
				<div className='m-auto text-xl max-w-lg'>
					Whether you&apos;ve just received a diagnosis or you&apos;re doing
					continued research, it can be hard to know where to start. We&apos;ve
					compiled our most trusted resources all in one place so you can get
					the most helpful, informative information without searching.
				</div>
				<ul className='m-auto mt-4 text-xl flex justify-center flex-col max-w-[60%]'>
					{resources.map((resource) => (
						<li key={resource.key}>
							<div className='flex col items-center'>
								<ImageNext
									src={resource.imgSrc}
									alt={resource.text}
									width={resource.width}
									height={resource.height}
									className='mr-2'
								/>
								<ExternalLink
									link={resource.link}
									name={resource.text}
								/>
							</div>
							<div className='ml-6 text-sm mb-5'>{resource.description}</div>
						</li>
					))}
				</ul>
			</div>

			<div className='mb-5 max-w-[65%] flex-col justify-center m-auto'>
				Can&apos;t find what you&apos;re looking for? Have a specific question?{' '}
				<br></br>
				Email us: <a href=''>connected.hearts@gmail.com</a>, or go to
				<a href=''> our forum</a>
			</div>
		</div>
	);
}
