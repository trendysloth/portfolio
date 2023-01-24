import React from "react";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Sidebar(){
	return (

			<section id="sidebar">

					<section id="intro">
						{/* <a href="#" class="logo2"><img src="images/deirdre.jpg" alt="" /></a> */}
						<header>
							<h2>Kally Wu</h2>
							<p>kallywywu at gmail dot com</p>
							
						</header>
					</section>

						<section class="blurb">
							<h2>About</h2>
							<p>technology | design</p>
							<p> 
								I'm a full-stack software engineer with major interests in machine learning and interdisciplinary work.
							</p>
						</section>

						<section id="footer">
							<ul class="icons">
								<li>
									<a href="https://www.linkedin.com/in/kallywu/"> 
										<FontAwesomeIcon icon={faLinkedinIn} size="2x"/> 
									</a>
								</li>
							</ul>
							<p class="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
						</section>

					</section>
	)
}

export default Sidebar;