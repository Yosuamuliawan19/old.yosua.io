import React, { Component } from 'react';
import ImageLoader from './ImageLoader';
import LazyLoad from 'react-lazy-load';
import { getProjects } from '@/components/legacy_portfolio/helper/api';
class ProjectSection2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			tabIndex: 1,
		};
		getProjects().then((data) => {
			if (data.data.data.projects) {
				console.log(data.data.data.projects);
				this.setState({ projects: data.data.data.projects });
			}
		});
	}
	handleChange = (value) => {
		this.setState({ tabIndex: value });
	};
	renderBlogs = () => {
		return (
			<div className='project-section-2-container'>
			<div style={{ height: 420, marginTop: 16}}>
			Woops ! Nothing here yet 🙈
		</div>
		</div>
		)
		
	}
	renderGithub = () => {
		return (
			<div className='project-section-2-container'>
			<div style={{ height: 420, marginTop: 16}}>
			Woops ! Nothing here yet 🙈
		</div>
		</div>
		)
	}
	renderProjectCards = () => {
		var projects = [...this.state.projects];
		projects.sort((a, b) => a.priority - b.priority);

		return (
			<div className='project-section-2-container'>
				{projects.map((data) => {
					console.log(data.priority);
					return (
						<div key={data.id} className='project-section-2-project-container'>
							<div className='project-section-2-project-image-container'>
								<LazyLoad debounce={false} throttle={10}>
									<ImageLoader
										onClick={(_) => window.open(data.url, '_blank')}
										className='project-section-2-project-image'
										src={data.image_url}
									>
										<div className={'platform-text'}>{data.year}</div>
									</ImageLoader>
								</LazyLoad>
							</div>

							<div className='project-section-2-info-container'>
								<div
									className='project-section-2-project-title'
									onClick={(_) => window.open(data.url, '_blank')}
								>
									{data.title}
								</div>
								<span className='project-section-2-project-sub'>
									{data.subtitle}
									{/* <strong>
									ReactJs, Flask, NodeJs
									</strong> */}
								</span>

								<div className='project-section-2-project-desc'>
									{data.description}
								</div>
								<button
									className='btn-secondary project-section-2-btn'
									onClick={(_) => window.open(data.url, '_blank')}
								>
									<div className='cta-text'>
										<div>{data.call_to_action}</div>
										{/* <img
											src='https://res.cloudinary.com/yosuam19/image/upload/v1604822777/icons8-external-link_auasst.svg'
											className={'cta-logo'}
										/> */}
									</div>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	};
	render() {
		let { tabIndex } = this.state;
		return (
			<div>
				{/* <div className='featured-projects-section-container'>
					Featured Projects
					<div className>Webflix - A z</div>
				</div> */}
				<div className='project-section-2-header'>
					{/* <Tabs
						value={tabIndex}
						onChange={this.handleChange}
						indicatorColor='primary'
						textColor='primary'
						scrollable
						scrollButtons='auto'
						variant='scrollable'
					>
						<Tab label='Projects' />
					</Tabs> */}
					<div className="ps2-header-bg">x</div>
					<button onClick={_=> this.handleChange(1)} className={'tab-header mr-12 ' + (tabIndex === 1 && ' tab-header-selected')}> Projects</button>
					<button onClick={_=> this.handleChange(2)}className={'tab-header mr-12 ' + (tabIndex === 2 && ' tab-header-selected')}> Blog</button>
					<button onClick={_=> this.handleChange(3)}className={'tab-header mr-12 '+ (tabIndex === 3 && ' tab-header-selected')}> Github</button>
				</div>
				{tabIndex === 1 && this.renderProjectCards()}
				{tabIndex === 2 && this.renderBlogs()}
				{tabIndex === 3 && this.renderGithub()}
			</div>
		);
	}
}

export default ProjectSection2;
