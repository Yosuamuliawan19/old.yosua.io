import React, { Component } from 'react';

import SkilsCarousel from './SkilsCarousel';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

class SkillsSection extends Component {
	render() {
		return (
			<div className='skills-wrapper'>
				<div className='skills-container'>
					<SkilsCarousel />
					<Reveal   effect="fadeInUp">

					<div className='cv-1 top-cv'>
						<img
							className='cv-logo'
							src='https://res.cloudinary.com/yosuam19/image/upload/v1618632957/shopee2_2_bkynm1.png'
						/>
						<div>
							<strong >From March 2021 to Present,</strong> I am currently a software engineer on the platform team (Shopee Platform Product) at Shopee Singapore.
						</div>
					</div>
					</Reveal>
					<Reveal   effect="fadeInUp">
					<div className='cv-1'>
						<img
							className='cv-logo'
							src='https://res.cloudinary.com/yosuam19/image/upload/v1612358811/portfolio/nus_comp_ornzov.png'
						/>
						<div>
							<strong>From January 2021 to Present,</strong> I am enrolled as a graduate student (MComp AI) at the National University of Singapore. Topics of interest includes computer vision, uncertainty modelling in AI and data-driven decision making
						</div>
					</div>
					</Reveal>
					<Reveal   effect="fadeInUp">
						
					<div className='cv-1'>
						<img
							className='cv-logo'
							src='https://res.cloudinary.com/yosuam19/image/upload/v1612358667/portfolio/uon_uvpcex.jpg'
						/>
						<div>
							<strong>From August 2019 to August 2020,</strong> I conducted
							machine learning research at the University of Nottingham as part
							of my dissertation. You can find the link to the paper in the
							projects section below.
						</div>
					</div>
					</Reveal>
					<Reveal   effect="fadeInUp">
					<div className='cv-1'>
						<img
							className='cv-logo'
							src='https://res.cloudinary.com/yosuam19/image/upload/v1612358590/portfolio/toped_mbmwsu.png'
						/>
						<div>
							<strong>From December 2018 to August 2019,</strong> I worked at
							Tokopedia, an e-commerce platform in
							Indonesia. I was involved in developing the payment module, as
							part of the optimization team.
						</div>
					</div>
					</Reveal>
					
					
				
					

					<Fade top>
					<div className='cv-1 '>
						<img
							className='cv-logo'
							src='https://res.cloudinary.com/yosuam19/image/upload/v1612358330/acm_sjwcs4.png'
						/>
						<div>
							<strong>From June 2017 - August 2018,</strong> I was part of the
							competitive programming team at University. I enjoy solving problem on{' '}
							<a target='_blank' href='https://uhunt.onlinejudge.org/id/864126'>
								UVa
							</a>
							,{' '}
							<a target='_blank' href='https://codeforces.com/profile/yosua19'>
								Codeforces
							</a>
							, and{' '}
							<a target='_blank' href='https://vjudge.net/user/yosuam19'>
								VJudge
							</a>
							. (and ocassionally still do) 
						</div>
					</div>
					</Fade>
				</div>
			</div>
		);
	}
}

export default SkillsSection;
