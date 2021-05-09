import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../templates/sidebar';

const Dashboard = () => {
	return (
		<div className='body-wrapper'>
			<Sidebar />

			<div id='wrapper'>
				<div className='row'>
					<div className='col-md-6 me-auto'>
						<h3 className='text-dark'>
							<span className='text-grey'>Hello,</span> Joshua
						</h3>
						<p>Which insurance do you want to get?</p>
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
									<img alt='img' src='assets/img/avatar.png' />
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
				<div className='row mt-4'>
					<div className='col-md-6 mb-3' data-bs-toggle='modal' data-bs-target='#carModal'>
						<div className='card mart-card p-4'>
							<img alt='img' src='assets/img/car.png' style={{ height: '50px', width: '100px' }} />
							<h3 className='mt-4 text-white'>Car Insurance</h3>
							<p className='text-teal'>
								At faucibus etiam vel lobortis enim fermentum a. At nec enim tellus senectus turpis auctor pretium non.
							</p>
						</div>
					</div>
					{/* <!-- #car Modal --> */}
					<div className='modal fade' id='carModal' tabindex='-1' aria-labelledby='carModalLabel' aria-hidden='true'>
						<div className='modal-dialog modal-dialog-centered modal-lg'>
							<div className='modal-content'>
								<div className='progress' style={{ height: '30px' }}>
									<div
										className='progress-bar bg-primary-main progress-bar-rounded'
										role='progressbar'
										style={{ width: '25%' }}
										aria-valuenow='25'
										aria-valuemin='0'
										aria-valuemax='100'></div>
								</div>
								<div className='modal-body bg-teal px-4 py-2'>
									<div className='row'>
										<div className='col-md-6'>
											<p className='small text-green fw-bold'>New Car Insurance Plan</p>
											<span className='text-muted small'>Step 1 of 5</span>
											<h5>Car Details</h5>
										</div>
										<div className='col-md-6'>
											<div className='social-icon mt-5 ms-auto bg-white' data-bs-dismiss='modal'>
												<button type='button' className='btn-close float-end' aria-label='Close'></button>
											</div>
										</div>
									</div>
								</div>
								<div className='modal-body pb-5'>
									<form className='px-3'>
										<div className='row'>
											<div className='col-md-6'>
												<div className='mb-3'>
													<label className='form-label'>Car Brand</label>
													<input type='text' className='form-control mart-input' placeholder='e.g Toyota' />
												</div>
											</div>
											<div className='col-md-6'>
												<div className='mb-3'>
													<label className='form-label'>Car Model</label>
													<input type='text' className='form-control mart-input' placeholder='e.g Camry' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<div className='mb-3'>
													<label className='form-label'>Manufacture Year</label>
													<input type='text' className='form-control mart-input' placeholder='e.g 2021' />
												</div>
											</div>
											<div className='col-md-6'>
												<div className='mb-3'>
													<label className='form-label'>Registration Number</label>
													<input type='text' className='form-control mart-input' placeholder='10-digit number' />
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<div className='mb-3'>
													<label className='form-label'>Chasis Number</label>
													<input type='text' className='form-control mart-input' placeholder='10-digit number' />
												</div>
											</div>
											<div className='col-md-6'>
												<div className='mb-3'>
													<label className='form-label'>Engine Number</label>
													<input type='text' className='form-control mart-input' placeholder='10-digit number' />
												</div>
											</div>
										</div>
										<div className='row mt-2'>
											<div className='col-md-6 mx-auto'>
												<div className='d-grid'>
													<button className='btn btn-secondary-main py-3 text-uppercase'>Continue</button>
												</div>
												<div className='d-grid mt-3'>
													<button className='btn btn-secondary-outline py-3 text-uppercase'>Continue</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className='col-md-6 mb-3'>
						<div className='card mart-card p-4'>
							<img alt='img' src='assets/img/heart-beat.png' height='50px' width='50px' />
							<h3 className='mt-4 text-white'>
								Health Insurance <button className='btn btn-green'>Coming Soon</button>
							</h3>
							<p className='text-teal'>
								At faucibus etiam vel lobortis enim fermentum a. At nec enim tellus senectus turpis auctor pretium non.
							</p>
						</div>
					</div>
				</div>
				<div className='row mt-4'>
					<div className='col-md-6 mb-3'>
						<div className='card mart-card p-4'>
							<img alt='img' src='assets/img/life-vest.png' height='50px' width='50px' />
							<h3 className='mt-4 text-white'>
								Life Insurance <button className='btn btn-green'>Coming Soon</button>
							</h3>
							<p className='text-teal'>
								At faucibus etiam vel lobortis enim fermentum a. At nec enim tellus senectus turpis auctor pretium non.
							</p>
						</div>
					</div>
					<div className='col-md-6 mb-3'>
						<div className='card mart-card p-4'>
							<img alt='img' src='assets/img/home.png' height='50px' width='50px' />
							<h3 className='mt-4 text-white'>
								Home Insurance <button className='btn btn-green'>Coming Soon</button>
							</h3>
							<p className='text-teal'>
								At faucibus etiam vel lobortis enim fermentum a. At nec enim tellus senectus turpis auctor pretium non.
							</p>
						</div>
					</div>
				</div>
				{/* <div className='row'>
					<form action='/upload' className='dropzone needsclick dz-clickable' id='my-awesome-dropzone'>
						<div className='dz-message needsclick'>
							<button type='button' className='dz-button'>
								Drop files here or click to upload.
							</button>
							<br />
							<span className='note needsclick'>
								(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
							</span>
						</div>
						<input type="file" name="file" />
					</form>
				</div> */}
			</div>
		</div>
	);
};

export default Dashboard;
