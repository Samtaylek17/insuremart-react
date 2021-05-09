import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../templates/sidebar';
import FixedSidenav from '../templates/sidebar_sm';

const Profile = () => {
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

					<div className='col-md-9 px-0 px-sm-5'>
						<form>
							<img src='assets/img/avatar-lg.png' className='profile-img' alt='avatar' />
							<button className='btn btn-secondary-main fw-normal text-uppercase p-2 px-3 ms-4'>Upload Image</button>
						</form>
						<form>
							<div className='row mt-4'>
								<div className='col-md-6'>
									<div className='mb-3'>
										<label className='form-label'>First Name</label>
										<input type='text' className='form-control mart-input' placeholder='First Name' />
									</div>
								</div>
								<div className='col-md-6'>
									<div className='mb-3'>
										<label className='form-label'>Last Name</label>
										<input type='text' className='form-control mart-input' placeholder='Last Name' />
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-md-6'>
									<div className='mb-3'>
										<label className='form-label'>Email Address</label>
										<input type='text' className='form-control mart-input' placeholder='Email' />
									</div>
								</div>
								<div className='col-md-6'>
									<div className='mb-3'>
										<label className='form-label'>Gender</label>
										<select className='form-select mart-input'>
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-md-6'>
									<div className='mb-3'>
										<label className='form-label'>Date of Birth</label>
										<input type='date' className='form-control mart-input' />
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-md-6'>
									<div className='mb-3'>
										<div className='d-grid'>
											<button className='btn btn-md btn-secondary-main py-3 text-uppercase'>Apply</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
