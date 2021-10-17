import React, { Component } from 'react';

class SkilsCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			c1: ['Experiences', 'Applications', 'Algorithms', 'Models'],
			c2: ['React', 'Golang', 'C++', 'Tensorflow'],
			col1: ['apple-blue', 'apple-green', 'apple-red', 'apple-yellow'],
			col2: ['apple-blue', 'apple-green', 'apple-red', 'apple-yellow'],
			i1: 0,
			i2: 0,
			animate: true,
		};
	}
	timedFunction() {
		this.setState({
			animate: false,
		});

		setTimeout((_) => {
			this.setState({
				i1: (this.state.i1 + 1) % this.state.c1.length,
				i2: (this.state.i1 + 1) % this.state.c2.length,
				animate: true,
			});
		}, 100);
	}
	componentDidMount() {
		this.interval = setInterval(() => this.timedFunction(), 2000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	render() {
		return (
			<div className='skills-section-container'>
				<div className='skills-section-title'>
					As an engineer, i like experimenting with
				</div>

				<div className='skills-section-desc'>
					{this.state.animate ? (
						<div className={`skills-section-desc-left  fadeInDown`}>
							<div className={` ${this.state.col1[this.state.i1]}`}>
							<strong>{this.state.c1[this.state.i1]}</strong>	
								</div>
						</div>
					) : (
						<div className='skills-section-desc-left'></div>
					)}
					<strong className='skills-section-desc-center fc'> using </strong>
					{this.state.animate ? (
						<div className={`skills-section-desc-right fadeInUp`}>
							<div className={` ${this.state.col1[this.state.i1]}`}>
							<strong>{this.state.c2[this.state.i2]}
							</strong>
							</div>
						</div>
					) : (
						<div className='skills-section-desc-right fc'></div>
					)}
				</div>
				<div className='skills-section-title'>
					With focus on user experience, usability and scalability.
				</div>
			</div>
		);
	}
}

export default SkilsCarousel;
