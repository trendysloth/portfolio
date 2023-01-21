import React from "react";

function Footer(){
	return (
		<section id="footer">
			<p> This site was built with React and deployed with Firebase. <a href="https://github.com/trendysloth/portfolio"> Source.</a> </p>
			<ul class="icons">
				<img src="images/reactlogo.svg" height="50px" alt="" />
				<img src="images/firebaselogo.svg" height="50px" alt="" />
			</ul>
		</section>
	)
}
export default Footer;