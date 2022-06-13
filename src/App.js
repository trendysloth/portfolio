import React from "react";
import Navigation from "./components/Navigation"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

export default function App() {
	return (
		<div id="wrapper">
			<Navigation />
			<Post/>
			<Sidebar/>
		</div>
	)
}