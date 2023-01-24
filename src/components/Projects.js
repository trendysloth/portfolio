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
									<h3>Unfinished Farewell</h3>
									<time>
										COVID-19 tribute mural built using React and Javascript. Featured in ACM SIGGRAPH and 
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
									<h3>Restaurant Recommendations</h3>
									<time> 
										A restaurant recommendation system built using publicly available Yelp data.
									</time>
								</header>
								<a href="https://trendysloth.github.io/yelp-restaurant-recommender/" class="image"><img src="images/recommendations.png" alt="" /></a>
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

							{/* <article class="mini-post">
								<header>
									<h3>AR/VR Podcast</h3>
									<time>
										AR/VR Podcast takes the audience through a journey from the past to the present in highlights in AR/ VR technology through data visualization
									</time>
								</header>
								<a href="https://player.vimeo.com/video/210814647" class="image">
									<img src="images/beach.png" alt="" />
								</a>
								<div className="description">
								</div>
							</article> */}
						<Footer />
						</div>
					</section>
				</article>

		</div>
	)
}
export default Projects;