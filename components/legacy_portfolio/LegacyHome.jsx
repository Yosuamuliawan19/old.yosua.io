import React, { Component } from 'react';
import Button from '@/components/legacy_portfolio/Button';
import SkillsSection from '@/components/legacy_portfolio/SkillsSection';
import ProjectSection2 from '@/components/legacy_portfolio/ProjectSection2';
import Footer from '@/components/legacy_portfolio/Footer';

class Home extends Component {
	render() {
		return (
			<div>
				{/* <NavBar/> */}
				<div className='alt-bg' />
				<div className='home-header-container alt-bg'>
					<div className='home-header-top-container'>
						<div className='home-header-name text-pop-up-top dark:text-white'> Hi there ! </div>
						{/* <div className='home-header-name text-pop-up-top'> Muliawan </div> */}
						<div className='home-header-user-name text-pop-up-top'><a href="https://github.com/Yosuamuliawan19" target="_blank">@yosuamuliawan19</a></div>
						<div className='home-header-position fadeInUp dark:text-white'>
							<div style={{marginRight: 6}}>💻 Software Engineer<span style={{fontWeight: 'bold'}}>
								{' '} - Shopee (SG)
							</span></div>
							{/* <div className='home-header-company-name-shopee'>
								{' '}
								Shopee (SG)
							</div>
							 */}
							
							
						</div>
						<div className='home-header-position fadeInUp dark:text-white'>
							<div  style={{marginRight: 6}}>🎓 Graduate Student <span style={{fontWeight: 'bold'}}>
								- National University of Singapore (NUS)
							</span></div>
						
							{/* <div className='home-header-company-name-nus'>
								{' '}
								National University of Singapore (NUS) 
							</div> */}
							
						</div>
						
						<div className='home-header-caption fadeInUp'>
							Hi there, welcome to my website, feel free to look around and
							check out the projects I have done in the past.
						</div>
						<div className='home-header-button-container'>
							<div
								className='home-header-button'
								onClick={(_) =>
									window.open(
										'mailto:yosuamuliawan19@gmail.com?body=Hi%20Yosua',
										'_blank'
									)
								}
							>
								<Button text={'Get in touch'} />
							</div>

							<div
								className='home-header-button'
								onClick={(_) =>
									window.open(' https://www.linkedin.com/in/yosuam/', '_blank')
								}
							>
								<Button text={'Look at CV'} />
							</div>
						</div>
					</div>
					<div className='home-header-bottom-wrapper'>
						<img className='home-header-background-image' />

						<div className='home-header-bottom-container'>
							<div className='home-header-bottom-text-container'>
								<div className="close">x</div>
								<div className="expand">x</div>
								<div className="fullscreen">x</div>
								<strong className='home-header-bottom-text-title'>
									I like creating web apps that are delightful to use, in code that is easy to maintain and understand
								</strong>
								<div className='home-header-bottom-text'>
									I also have an eclectic mix of interests, which includes
									competitive programming, software
									engineering, and machine learning / data science.
								</div>
							</div>
							<div className='home-header-bottom-text-container'>
								<strong className='home-header-bottom-text-title'>
									Through my undergraduate dissertation and my current studies at NUS, i am also very interested in the world of machine learning/ data science
								</strong>
								<div className='home-header-bottom-text'>
									In my spare time, i enjoy catching up on the latest research in AI/ML as well as playing around with ML models
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<SkillsSection />
					<ProjectSection2 />
					<div className='home-footer-container'></div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Home;
