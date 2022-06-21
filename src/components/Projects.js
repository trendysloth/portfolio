import React from "react";
import Footer from "./Footer"

function Projects(){
	return (
		<div id="main">
				<article class="post">
					<header>
						<div class="title">
							<h2>Some things I've done</h2>
							{/*<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>*/}
						</div>

					</header>
							<section>
								<div class="mini-posts">

									<article class="mini-post">
										<header>
											<h3>Multitask reinforcement learning algorithms</h3>
											<time> 
											Built a benchmark for applying reinforcement learning
											algorithms to many different robotic tasks. We also designed 
											new reinforcement algorithms to work across multiple tasks.
											</time>
										</header>
										<a href="https://meta-world.github.io/" class="image"><img src="images/metaworld.jpg" alt="" /></a>
									</article>

									<article class="mini-post">
										<header>
											<h3>Machine learning for robot grasping</h3>
											<figcaption> 
												Developed reinforcement learning algorithms at Google for grasping.

											</figcaption>
										</header>
										<a href="https://ai.googleblog.com/2016/03/deep-learning-for-robots-learning-from.html" class="image">
										<img src="images/robots.jpg" alt="" />
										</a>
										<div className="description">
    									
  										</div>
									</article>
								<Footer />

								</div>
							</section>
				</article>

		</div>
	)
}

export default Projects;