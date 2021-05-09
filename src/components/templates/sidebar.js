import React from 'react';
import { Link } from 'react-router-dom';
import path from '../../routes/routes';

const Sidebar = () => {
	return (
		<div id='side-nav'>
			<div className='sidebar-header'>
				<img alt='img' src='assets/img/logo.png' className='img-fluid' />
			</div>
			<div className='px-3'>
				<hr className='bg-white' />
			</div>
			<div className='row mt-3'>
				<Link to={path.DASHBOARD} className='text-decoration-none'>
					<div className='sidebar-menu active menu-text pt-3 pb-2 text-center'>
						<span className='material-icons'>home</span>
						<p className='fw-light mt-2'>Home</p>
					</div>
				</Link>
			</div>
			<div className='row'>
				<div className='sidebar-menu menu-text pt-3 mb-3 pb-2 text-center'>
					<span className='material-icons'>verified_user</span>
					<p className='fw-light mt-2'>My Insurance</p>
				</div>
			</div>
			<div className='px-3'>
				<hr className='bg-white' />
			</div>
			<div className='row'>
				<div className='sidebar-menu menu-text pt-3 mb-4 pb-2 text-center'>
					<span className='material-icons'>credit_card</span>
					<p className='fw-light mt-2'>My Cards & Add</p>
				</div>
			</div>
			<div className='row'>
				<Link to={path.PROFILE} className='text-decoration-none'>
					<div className='sidebar-menu menu-text pt-3 mb-4 pb-2 text-center'>
						<span className='material-icons'>settings</span>
						<p className='fw-light mt-2'>Other Settings</p>
					</div>
				</Link>
			</div>
			<div className='row'>
				<div className='sidebar-menu menu-text pt-3 mb-4 pb-2 text-center'>
					<span className='material-icons'>support_agent</span>
					<p className='fw-light mt-2'>Help & Support</p>
				</div>
			</div>
			<div className='row'>
				<div className='sidebar-menu menu-text pt-3 mb-4 pb-2 text-center'>
					<img alt='img' src='assets/icons/info.svg' />
					<p className='fw-light mt-2'>About Us</p>
				</div>
			</div>
			<div className='px-3'>
				<hr className='bg-white' />
			</div>
		</div>
	);
};

export default Sidebar;
