import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

type Props = {
	text: string;
	image: string;
	imgAlt: string;
	image2?: string;
	img2Alt?: string;
	children: any;
};

function Tooltip(props) {
	const { text, image, image2, imgAlt, img2Alt, children } = props;
	return (
		<div className={styles.tooltip}>
			<span className='underline text-purple hover:text-indigo'>
				{children}
			</span>
			<span className={styles.tooltiptext}>
				{' '}
				<Image
					src={image}
					width={100}
					height={100}
					alt={imgAlt}
					className=''
				/>
				<span>{text}</span>
				{image2 && (
					<Image
						src={image2}
						width={150}
						height={150}
						alt={img2Alt}
						className=''
					/>
				)}
			</span>
		</div>
	);
}

export default Tooltip;

// 	return (
// 		<div className={styles.tooltip}>
// 			{children}
// 			{image2 && (
// 				<Image
// 					src={image2}
// 					width={150}
// 					height={150}
// 					alt={img2Alt}
// 					className=''
// 				/>
// 			)}
// 			<span className={styles.tooltiptext}>{text}</span>
// 			<Image
// 				src={image}
// 				width={150}
// 				height={150}
// 				alt={imgAlt}
// 				className=''
// 			/>
// 		</div>
// 	);
// }
