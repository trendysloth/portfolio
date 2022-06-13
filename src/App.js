import React from "react";
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';

export default function App() {
	return (
		<main className="text-gray-400 bg-gray-900 body-font">
			<Container className="p-3">
				<Container className="p-5 mb-4 bg-light rounded-3">
					<h1 className="header">
					Hello
					</h1>
				</Container>
			</Container>
		</main>
	)
}