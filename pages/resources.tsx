import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import ExternalLink from '@/components/ExternalLink';
import ImageNext from 'next/image';
import resources from '@/content/resources';
import Link from 'next/link';
import ResourcesAccordion from '@/components/ResourcesAccordion';
import Image from 'next/image';

export default function Resources() {
	return (
		<div className='max-w-[1000px] m-auto'>
			<Navigation />
			<Heading
				credit={''}
				imgSrc={'/pics/Therapy_Resources.jpg'}
				heading='Resources for Those With Congenital Heart Disease'
			/>

			<div
				id='body'
				className='body flex flex-col justify-center mb-8 mt-[-30px] para'
			>
				<div className='m-auto  max-w-lg my-4 para'>
					It can be overwhelming as you begin your search for information
					regarding congenital heart disease. Here we have strived to do some of
					the ground work for you! Below you will find high-quality resources
					which may contain helpful information regarding your child’s specific
					lesion. You can also{' '}
					<Link
						className='underline text-purple hover:text-teal'
						href='/learn'
					>
						view our learn page
					</Link>
					or a brief overview of expected heart development and when various
					defects frequently develop. After you have received the diagnosis you
					will also be referred to a pediatric heart specialist, they are an
					invaluable resource and you should never hesitate to reach out with
					any questions.
				</div>
				<div className='m-auto  max-w-lg my-4 para'>
					It can be a challenging and emotionally taxing time taking care of a
					child without health issues; caring for a sick child, especially with
					CHD can is often even harder. Despite advancements in medical and
					surgical management of kids with CHD, certain defects still have high
					infant mortality rates and those that survive often spend months in
					the hospital during their first year of life and/or beyond. It is
					important to consider what you are comfortable or feel prepared to
					handle. If you do not believe this is the right time or situation,
					please do not hesitate to talk with you provider or{' '}
					<Link
						className='underline text-purple hover:text-teal'
						href='https://www.plannedparenthood.org/'
					>
						visit Planned Parenthood.
					</Link>{' '}
					It is a difficult decision and there is no right answer. You deserve
					to have all the information and non-judgemental support to help you
					make the right choice.
				</div>

				<div className='mx-auto mt-10 w-full bg-indigo rounded p-6'>
					<div className='text-white text-bold text-3xl pb-3'>Resources</div>
					<div>
						<ResourcesAccordion
							title='Financial and Community'
							content={resources.socio}
						/>
						<ResourcesAccordion
							title='Educational Content'
							content={resources.educ}
						/>
						<ResourcesAccordion
							title='Counseling/Therapy'
							content={resources.therapy}
						/>
					</div>
				</div>
			</div>

			<div className='flex-col justify-center text-center mb-5'>
				Can&apos;t find what you&apos;re looking for? <br></br>Have a specific
				question? <br></br>
				Email us:{' '}
				<a href='mailto:connected.hearts@gmail.com'>
					connected.hearts@gmail.com
				</a>
				<br></br>
				<Link href='/forum'>
					Have more questions? Ask the Heart Connected Community
				</Link>
			</div>
		</div>
	);
}
