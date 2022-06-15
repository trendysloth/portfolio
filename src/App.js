import React from "react";
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"

export default function App() {
	return (
		<div id="wrapper">
			<Navigation />
			<Projects/>
			<Sidebar/>
		</div>
	)
}