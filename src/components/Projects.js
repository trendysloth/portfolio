import React from "react";
import Footer from "./Footer"

function Projects(){
	return (
		<div id="main">
				<article class="post">
					<header>
						<div class="title">
							<h2>Some projects I've done</h2>
						</div>
					</header>
					<section>
						<div class="mini-posts">
							<article class="mini-post">
								<header>
									<h3>Gender Classification and Bias Mitigation in Facial Images</h3>
									<time>
									Gender classification algorithms have important applications in many domains today such as demographic research, law enforcement, as well as human-computer interaction. Recent research showed that algorithms trained on biased benchmark databases could result in algorithmic bias. However, to date, little research has been carried out on gender classification algorithms' bias towards gender minorities subgroups, such as the LGBTQ and the non-binary population, who have distinct characteristics in gender expression. Featured in 
										<a href="https://arxiv.org/abs/2007.06141"> ACM WebScience </a>
									</time>
								</header>
								<a href="https://www.farewell.care/?lang=en" class="image">
									<img src="images/facialimages.png" alt="" />
								</a>
								<div className="description">
								</div>
							</article>
							<article class="mini-post">
								<header>
									<h3>Unfinished Farewell</h3>
									<time>
										COVID-19 tribute mural built using React and Javascript. Featured in 
										<a href="https://dl.acm.org/doi/abs/10.1145/3450623.3464646"> ACM SIGGRAPH </a> and 
										<a href="https://competition.adesignaward.com/design.php?ID=122354"> A’ Design Award </a>
									</time>
								</header>
								<a href="https://www.farewell.care/?lang=en" class="image">
									<img src="images/unfinishedfarewell.png" alt="" />
								</a>
								<div className="description">
								</div>
							</article>
							<article class="mini-post">
								<header>
									<h3>Beach</h3>
									<time>
										Beach presents an example of how virtual reality and 360 video could be used to demonstrate environmental data in tangible, visceral ways.
									</time>
								</header>
								<a href="https://player.vimeo.com/video/210814647" class="image">
									<img src="images/beach.png" alt="" />
								</a>
								<div className="description">
								</div>
							</article>
							<article class="mini-post">
								<header>
									<h3>Restaurant Recommendations</h3>
									<time> 
										A restaurant recommender system built using publicly available Yelp data.
									</time>
								</header>
								<a href="https://trendysloth.github.io/yelp-restaurant-recommender/" class="image"><img src="images/recommendations.png" alt="" /></a>
							</article>
							<article class="mini-post">
								<header>
									<h3>Imrobs Adventure</h3>
									<time> 
										Hades style solo-protagonist game with top-down 3d view.
									</time>
								</header>
								<a href="https://www.youtube.com/watch?v=aNfENAoxpvI" class="image"><img src="images/ImrobsAdventure.png" alt="" /></a>
							</article>
							<article class="mini-post">
								<header>
									<h3>NeRF applied to satellite imagery for surface reconstruction</h3>
									<time>
										We present Sat-NeRF, a modified implementation of the recently introduced Shadow Neural Radiance Field (S-NeRF) model. This method is able to synthesize novel views 
										from a sparse set of satellite images of a scene, while accounting for the variation in lighting present in the pictures.
									</time>
								</header>
								<a href="https://drive.google.com/file/d/1kE5qyf0_n4TPpFGmk7sK1TVYKWBmqrZP/view" class="image">
									<img src="images/snerf.jpeg" alt="" />
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