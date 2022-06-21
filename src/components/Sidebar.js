import React from "react";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Sidebar(){
	return (

			<section id="sidebar">

					<section id="intro">
						<a href="#" class="logo2"><img src="images/deirdre.jpg" alt="" /></a>
						<header>
							<h2>Deirdre Quillen</h2>
							<p>dequillen at gmail.com</p>
						</header>
					</section>

						<section class="blurb">
							<h2>About</h2>
							<p> 
							I've been doing machine learning engineering and research at Berkeley and
							Google Brain. Looking for work as a machine learning engineer.
							</p>

						</section>

						<section id="footer">
							<ul class="icons">
								<li><a href="https://www.linkedin.com/in/deirdre-quillen-5ba111a1/"> <FontAwesomeIcon icon={faLinkedinIn} size="2x"/> </a></li>
								<li><a href="https://github.com/dequillen"> <FontAwesomeIcon icon={faGithub} size="2x"/> </a></li>


							</ul>
				
							<p class="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
						</section>

					</section>
	)
}

export default Sidebar;