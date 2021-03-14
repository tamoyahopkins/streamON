import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div className="about-area-two bg-color ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>StreamOn Productions</span>
							<h2>We Are A Live Theatre Production Company</h2>
							<p>I'm baby lomo synth humblebrag chambray coloring book hell of unicorn fingerstache, shoreditch shaman adaptogen microdosing 8-bit kogi. Kombucha fingerstache vinyl, leggings live-edge shoreditch farm-to-table. Polaroid austin fashion axe, prism whatever activated charcoal PBR&B adaptogen hammock distillery. Hoodie whatever viral selfies glossier, cred asymmetrical. Lyft unicorn vexillologist 3 wolf moon.  Dreamcatcher chambray marfa semiotics raclette. Plaid venmo flexitarian, 90's actually air plant tofu chartreuse mustache. Fashion axe microdosing sustainable williamsburg polaroid before they sold out. Marfa keytar vexillologist pork belly scenester chartreuse, af bicycle rights wayfarers fam deep v vice pour-over post-ironic. Cornhole pickled mixtape, hella lumbersexual paleo put a bird on it.</p>

                            <Link href="/about">
                                <a className="default-btn">Learn More</a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="about-img">
							<img src="/img/about-img-two.jpg" alt="Image" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default About;