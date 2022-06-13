import React from "react";

function Post(){
	return (
		<div id="main">
				<article class="post">
					<header>
						<div class="title">
							<h2><a href="single.html">Magna sed adipiscing</a></h2>
							<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
						</div>
						<div class="meta">
							<time class="published" datetime="2015-11-01">November 1, 2015</time>
							<a href="#" class="author"><span class="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
						</div>
					</header>
					<a href="single.html" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
					<p> 
						Some test text. Some test text.Some test text.Some test text.Some test text.
						Some test text.Some test text.Some test text.Some test text.Some test text.
						Some test text.Some test text.Some test text.Some test text.Some test text.
						Some test text.Some test text.Some test text.Some test text.Some test text.
						Some test text.Some test text.Some test text.Some test text.Some test text.
					</p>

				</article>
		</div>
	)
}

export default Post;