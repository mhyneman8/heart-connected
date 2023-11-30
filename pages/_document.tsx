import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html
			lang='en'
			style={{ overflowX: 'hidden' }}
			title='Heart Connected'
		>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
