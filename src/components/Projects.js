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
									<h3>Restaurant Recommendations</h3>
									<time> 
										A restaurant recommendation system built using publicly available Yelp data.
									</time>
								</header>
								<a href="https://trendysloth.github.io/yelp-restaurant-recommender/" class="image"><img src="images/recommendations.png" alt="" /></a>
							</article>

							<article class="mini-post">
								<header>
									<h3>Unfinished Farewell</h3>
									<time>
										COVID-19 tribute mural built using React and Javascript
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
										Virtual Reality application visualizing climate change
									</time>
								</header>
								<a href="https://player.vimeo.com/video/210814647" class="image">
									<img src="images/beach.jpeg" alt="" />
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