import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import info from '../assets/info.svg';

type Props = {
	text: string;
	image: string;
	imgAlt: string;
	image2?: string;
	img2Alt?: string;
	text2?: string;
	children: any;
};

function Tooltip(props: Props) {
	const { text, image, image2, imgAlt, img2Alt, children, text2 } = props;

	return (
		<div className={styles.tooltip}>
			<span className='underline text-purple hover:text-indigo'>
				{children}
				<Image
					src={info}
					width={10}
					height={10}
					alt=''
					className='inline mt-[-10px]'
				/>
			</span>
			<span className={`${styles.tooltiptext}`}>
				{' '}
				<div className='text-center mb-5'>
					<Image
						src={image}
						width={200}
						height={200}
						alt={imgAlt}
						className='m-auto'
					/>
				</div>
				<span>{text}</span>
				{image2 && img2Alt && (
					<>
						<Image
							src={image2}
							width={250}
							height={250}
							alt={img2Alt}
							className=''
						/>
						<span>{text2}</span>
					</>
				)}
			</span>
		</div>
	);
}

export default Tooltip;
