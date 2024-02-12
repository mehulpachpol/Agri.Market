import React from "react";

const Home = () => {
	return (
		<>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol class="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						class="active"
					></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active" style={{ backgroundColor: "#000" }}>
						<img
							class="d-block w-100"
							src="./assets/n3.jpg"
							alt="First slide"
							height={600}
						/>
						<div className="card-img-overlay d-flex align-items-center">
							<div className="container">
								<h5
									className="card-title fs-1 text fw-lighter"
									style={{ color: "white" }}
								>
									From Farm to Feast: Affordable E-commerce Connects You to
									Endless Products{" "}
								</h5>
								<p
									className="card-text fs-5 d-none d-sm-block "
									style={{ color: "white" }}
								>
									Step into a virtual agrarian haven where pixels plow
									prosperity, and bytes blossom into bountiful harvests –
									welcome to <b>Agri.market</b>, where the future of farming
									unfolds in every click!.
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item" >
						<img
							class="d-block w-100"
							src="./assets/z1.jpg"
							alt="Second slide"
							height={600}
						/>
						<div className="card-img-overlay d-flex align-items-center">
							<div className="container">
								<h5
									className="card-title fs-1 text fw-lighter"
									style={{ color: "white" }}
								>
									Shop our wide range of top-quality fertilizers and pest
									solutions.{" "}
								</h5>
								<p
									className="card-text fs-5 d-none d-sm-block "
									style={{ color: "white" }}
								>
									No matter your crop, conquer challenges and cultivate success!
									Our diverse range of fertilizers and pest solutions offers
									targeted solutions for any plant problem, big or small.
								</p>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img
							class="d-block w-100"
							src="./assets/z3.jpg"
							alt="Third slide"
							height={600}
						/>
						<div className="card-img-overlay d-flex align-items-center">
							<div className="container">
								<h5
									className="card-title fs-1 text fw-lighter"
									style={{ color: "white" }}
								>
									From planting to harvest, we have the tools you need to
									cultivate every step of the way.{" "}
								</h5>
								<p
									className="card-text fs-5 d-none d-sm-block "
									style={{ color: "white" }}
								>
									Starting with sowing precise seeds and nurturing seedlings,
									our tools guide you through every stage. From tilling fertile
									soil to harvesting bountiful crops, we equip you to conquer
									every challenge and celebrate every success.
								</p>
							</div>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<br></br>

		</>
	);
};

export default Home;
