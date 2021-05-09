import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../templates/sidebar';
import FixedSidenav from '../templates/sidebar_sm';

const Socials = () => {
	return (
		<div className='body-wrapper'>
			<Sidebar />
			<div id='wrapper'>
				<div class='row'>
					<div class='col-md-6 me-auto'>
						<h3 class='text-dark'>Settings</h3>
					</div>
					<div class='col-md-5 col-12 ms-auto text-end'>
						<span class='material-icons align-middle px-sm-3 px-0'>notifications</span>
						<div class='dropdown d-inline user-dropdown'>
							<button
								class='btn dropdown-toggle py-2 profile-dropdown notif-dropdown'
								id='dropdownMenuLink'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<div class='avatar d-inline'>
									<img src='assets/img/avatar.png' alt='avatar' />
								</div>
								Joshua Hawkins
							</button>
							<ul class='dropdown-menu dropdown-content' aria-labelledby='dropdownMenuLink'>
								<li>
									<Link class='dropdown-item py-1' to='#'>
										<span class='material-icons align-middle text-green pe-3'>edit</span>
										<span class='align-middle'>Edit Profile</span>
									</Link>
								</li>
								<li>
									<Link class='dropdown-item' to='#'>
										<span class='material-icons align-middle text-green pe-3'>arrow_circle_up</span> Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class='row mt-huge'>
					<FixedSidenav />
					<div class='col-md-9 px-0 px-sm-5'>
						<div class='row'>
							<div class='col-md-6'>
								<button class='connect-social active'>
									<div>
										<span class='float-start'>
											<i class='fab fa-google google-red fs-5 pe-3'></i> Google
										</span>
										<span class='float-end small'>Connected</span>
									</div>
								</button>
							</div>
							<div class='col-md-6'>
								<button class='connect-social'>
									<div>
										<span class='float-start'>
											<i class='fab fa-facebook-square facebook-blue fs-5 pe-3'></i> Facebook
										</span>
										<span class='float-end small'>Not Connected</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Socials;
