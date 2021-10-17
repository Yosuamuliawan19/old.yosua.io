import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<div>
				<div className='sidebar-borders' />
				<div className='sidebar-container'>
					<div className='tooltip'>
						<img
							className='sidebar-logo'
							src={require('./assets/instagram.png')}
							onClick={(_) =>
								window.open(
									'https://www.instagram.com/yosuamuliawan/?hl=en',
									'_blank'
								)
							}
						/>
						<span class='tooltiptext apple-red'>Instagram</span>
					</div>
					<div className='tooltip'>
						<img
							className='sidebar-logo'
							src={require('./assets/medium.png')}
							onClick={(_) =>
								window.open('https://yosuamuliawan.medium.com/', '_blank')
							}
						/>
						<span class='tooltiptext apple-yellow'>Medium</span>
					</div>
					<div className='tooltip'>
						<img
							className='sidebar-logo'
							src={require('./assets/github.svg')}
							onClick={(_) =>
								window.open('https://github.com/Yosuamuliawan19', '_blank')
							}
						/>
						<span class='tooltiptext apple-green'>Github</span>
					</div>
					
					<div className='tooltip'>
						<img
							className='sidebar-logo'
							src={require('./assets/linkedin.png')}
							onClick={(_) => window.open('https://www.linkedin.com/in/yosua-muliawan/?originalSubdomain=sg', '_blank')}
						/>
						<span class='tooltiptext apple-blue'>Linkedin</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;
