import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import ExternalLink from '@/components/ExternalLink';
import ImageNext from 'next/image';
import resources from '@/content/resources';
import Link from 'next/link';
import ResourcesAccordion from '@/components/ResourcesAccordion';

export default function Resources() {
	return (
		<div>
			<Navigation />
			<Heading heading='Resources for Those With Congenital Heart Disease' />

			<div className='body flex flex-col justify-center mb-8'>
				<div className='m-auto text-xl max-w-lg'>
					It can be overwhelming when scouring the internet for information
					regarding congenital heart disease. If you are interested in learning
					more about CHD and the development of the heart, in general please{' '}
					<Link
						className='underline text-purple hover:text-teal'
						href='/learn'
					>
						visit our learn section
					</Link>
					. Also below are high-quality resources which may contain more
					information regarding your child’s specific lesion. It should be noted
					that if you ever have questions, you should feel comfortable reaching
					out to your provider.
				</div>
				<div className='m-auto text-xl max-w-lg text-sm my-4'>
					Taking care of a health child is a challenging and emotionally taxing
					task. Caring for a sick child with CHD can make the struggles even
					harder. Despite advancements in medical and surgical management of
					kids with CHD, certain defects still have high infant mortality rates
					and those that survive may still spend months in the hospital during
					their first year of life or beyond. It is important to consider what
					you are comfortable or prepared to handle. If you do not believe this
					is the right time or situation, please do not hesitate to talk with
					you provider or{' '}
					<Link
						className='underline text-purple hover:text-teal'
						href='https://www.plannedparenthood.org/'
					>
						visit Planned Parenthood.
					</Link>{' '}
					It is a difficult decision and there is no right answer. You deserve
					to have all the information and the non-judgemental support network to
					help you make the right choice.
				</div>

				<div className='mx-auto w-full bg-indigo rounded-b-2xl p-6'>
					<div className='text-white text-bold text-3xl pb-3'>Resources</div>
					<div>
						<ResourcesAccordion
							title='Socioemotional Resources'
							content={resources.socio}
						/>
						<ResourcesAccordion
							title='Education Content'
							content={resources.educ}
						/>
					</div>
				</div>
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
