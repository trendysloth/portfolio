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
							<p> 
								I'm a full-stack software engineer with major interests in machine learning and interdisciplinary work.
							</p>
						</section>

						<section class="blurb">
							<h2>Why did I become a software engineer?</h2>
							<p> 
								I got asked this question so many times at job interviews or sometimes even when I meet a new person. You are an architecture major and why are you a software engineer now? 
								My interest in computation started at an early age when I was in elementary school playing with the LOGO sea turtle drawing software in my computer classes. I always find computers interesting but somehow I 
								never thought about majoring in computer science in college (I was a math major first year in college but later I switched to architecture because I want to do something more hands on). 
								
								In architecture school, my interest in computer science gradually grew, I was drawn to various design and parametric softwares. Finally, one year I took a CS course that taught me the k-means clustering algorithm. 
								Somehow I was immediately hooked about how simple and beautiful k-means is. Yes, I want to learn more about computers ... 
								
								...And the rest is the history. I could write another five pages here about my CS journey in grad school. But hey computers are fasincating... Be it LOGO sea turtle, Be it Red Dead Redemption, Be it Neural Networks, Be it Rhinoceros. We can't live without computers now. They have become part of our lives.
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