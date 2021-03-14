import React from 'react';

const AboutContent = () => {
    return (
        <div className="about-area-two bio-data ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>StreamOn Bio</span>
							<h2>We stream plays using artists from around the globe.</h2>

							<h3>Who We Are</h3>
							<p>Stream ON! is a play festival that showcases short 10-minute play written by playwrights from all over the world. The goal is to celebrate artists work during this time of current crisis.</p>

							<h3 className="mt-30">Who We Work With</h3>
							<p>We work with actors and playwrights from around world. Interested in having your play produced by us?  Interested in acting in one of our productions? Do not hesitate to contact us!</p>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img">
									<img src="/img/about-grid/about-grid1.jpg" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img">
									<img src="/img/about-grid/about-grid2.jpg" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img r-sm mb-0">
									<img src="/img/about-grid/about-grid3.jpg" alt="Image" />
								</div>
							</div>

							<div className="col-lg-6 col-sm-6 p-0">
								<div className="about-grid-img mb-0">
									<img src="/img/about-grid/about-grid4.jpg" alt="Image" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutContent;