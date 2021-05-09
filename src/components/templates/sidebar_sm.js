import React from 'react';
import { Link } from 'react-router-dom';
import path from '../../routes/routes';

const FixedSidenav = () => {
	return (
		<div className='col-md-3 border-end'>
			<div className='nav flex-column'>
				<li className='nav-item side-panel active py-2 my-2'>
					<Link className='nav-link text-dark' to={path.PROFILE}>
						<span className='material-icons align-middle pe-2'>edit</span> Edit Profile
						<span className='material-icons align-middle float-end'>chevron_right</span>
					</Link>
				</li>
				<li className='nav-item side-panel py-2 my-2'>
					<Link className='nav-link text-dark' to={path.SOCIALS}>
						<span className='material-icons align-middle pe-2'>facebook</span> Connect Socials
						<span className='material-icons align-middle float-end'>chevron_right</span>
					</Link>
				</li>
				<li className='nav-item side-panel py-2 my-2'>
					<Link className='nav-link text-dark' to={path.NOTIFICATION}>
						<span className='material-icons align-middle pe-2'>notifications</span> Notification Settings
						<span className='material-icons align-middle float-end'>chevron_right</span>
					</Link>
				</li>
				<li className='nav-item side-panel py-2 my-2'>
					<Link className='nav-link text-dark' to={path.SECURITY}>
						<span className='material-icons align-middle pe-2'>lock</span>Security & Password
						<span className='material-icons align-middle float-end'>chevron_right</span>
					</Link>
				</li>
			</div>
		</div>
	);
};

export default FixedSidenav;
