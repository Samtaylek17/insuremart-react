import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../templates/sidebar';
import FixedSidenav from '../templates/sidebar_sm';

const Notification = () => {
	return (
		<div className='body-wrapper'>
			<Sidebar />
			<div id='wrapper'>
				<div className='row'>
					<div className='col-md-6 me-auto'>
						<h3 className='text-dark'>Settings</h3>
					</div>
					<div className='col-md-5 col-12 ms-auto text-end'>
						<span className='material-icons align-middle px-sm-3 px-0'>notifications</span>
						<div className='dropdown d-inline user-dropdown'>
							<button
								className='btn dropdown-toggle py-2 profile-dropdown notif-dropdown'
								id='dropdownMenuLink'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<div className='avatar d-inline'>
									<img src='assets/img/avatar.png' alt='avatar' />
								</div>
								Joshua Hawkins
							</button>
							<ul className='dropdown-menu dropdown-content' aria-labelledby='dropdownMenuLink'>
								<li>
									<Link className='dropdown-item py-1' to='#'>
										<span className='material-icons align-middle text-green pe-3'>edit</span>
										<span className='align-middle'>Edit Profile</span>
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='#'>
										<span className='material-icons align-middle text-green pe-3'>arrow_circle_up</span> Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='row mt-huge'>
					<FixedSidenav />
					<div className='col-md-4 px-0 px-sm-5'>
						<div className='row'>
							<div className='col-md-12 notif-switch'>
								<span className='float-start'>All Notifications</span>
								<div className='form-check form-switch float-end'>
									<label className='switch'>
										<input type='checkbox' />
										<span className='slider round'></span>
									</label>
								</div>
							</div>
							<hr className='my-5' />
							<div className='col-md-12 notif-switch'>
								<span className='float-start'>News and Promos</span>
								<div className='form-check form-switch float-end'>
									<label className='switch'>
										<input type='checkbox' />
										<span className='slider round'></span>
									</label>
								</div>
							</div>
							<div className='col-md-12 mt-5 notif-switch'>
								<span className='float-start'>News and Promos</span>
								<div className='form-check form-switch float-end'>
									<label className='switch'>
										<input type='checkbox' />
										<span className='slider round'></span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
