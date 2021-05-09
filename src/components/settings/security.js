import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../templates/sidebar';
import FixedSidenav from '../templates/sidebar_sm';

const Security = () => {
	return (
		<div class='body-wrapper'>
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
							<button type='button' class='notif-switch' data-bs-toggle='modal' data-bs-target='#bvnModal'>
								<span class='float-start'>BVN</span>
								<span class='float-end small text-grey'>
									Connected <span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>
							<div class='modal fade' id='bvnModal' tabindex='-1' aria-labelledby='bvnModalLabel' aria-hidden='true'>
								<div class='modal-dialog modal-dialog-centered'>
									<div class='modal-content'>
										<div class='modal-body px-4 py-4'>
											<button
												type='button'
												class='btn-close float-start ms-0'
												data-bs-dismiss='modal'
												aria-label='Close'></button>
											<h5 class='modal-title text-center' id='bvnModalLabel'>
												BVN
											</h5>
										</div>
										<div class='modal-body pb-5'>
											<form class='px-3'>
												<div class='row'>
													<div class='mb-3'>
														<label class='form-label'>BVN</label>
														<input type='text' class='form-control mart-input' placeholder='10-digit number' />
													</div>
												</div>
												<div class='row'>
													<div class='d-grid'>
														<button class='btn btn-secondary-main py-3 text-uppercase'>Verify & Save</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<button type='button' class='mt-2 notif-switch' data-bs-toggle='modal' data-bs-target='#idModal'>
								<span class='float-start'>ID Verification</span>
								<span class='float-end small text-grey'>
									Not verified <span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>
							<div class='modal fade' id='idModal' tabindex='-1' aria-labelledby='idModalLabel' aria-hidden='true'>
								<div class='modal-dialog modal-dialog-centered modal-lg'>
									<div class='modal-content'>
										<div class='modal-body px-4 py-4'>
											<button
												type='button'
												class='btn-close float-start ms-0'
												data-bs-dismiss='modal'
												aria-label='Close'></button>
											<h5 class='modal-title text-center' id='idModalLabel'>
												ID Verification
											</h5>
										</div>
										<div class='modal-body pb-5'>
											<form class='px-3'>
												<div class='row'>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>ID Front</label>
															<div class='d-block border bg-grey rounded text-center p-5'>
																<label type='button' class='file-uploader btn btn-secondary-main py-3 px-4'>
																	Upload Image
																	<input type='file' class='' placeholder='10-digit number' hidden />
																</label>
															</div>
														</div>
													</div>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>ID Back</label>
															<div class='d-block border bg-grey rounded text-center p-5'>
																<label type='button' class='file-uploader btn btn-secondary-main py-3 px-4'>
																	Upload Image
																	<input type='file' class='' placeholder='10-digit number' hidden />
																</label>
															</div>
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>ID Type</label>
															<select class='form-select mart-input'>
																<option>ID Type</option>
															</select>
														</div>
													</div>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>ID Number</label>
															<input type='text' class='form-control mart-input' placeholder='ID Number' />
														</div>
													</div>
												</div>
												<div class='row mt-3'>
													<div class='col-md-6 mx-auto'>
														<div class='d-grid'>
															<button class='btn btn-secondary-main py-3 text-uppercase'>Verify & Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<button class='mt-2 notif-switch' data-bs-toggle='modal' data-bs-target='#utilityModal'>
								<span class='float-start'>Utility Bill</span>
								<span class='float-end small text-grey'>
									Not Connected <span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>
							<div
								class='modal fade'
								id='utilityModal'
								tabindex='-1'
								aria-labelledby='utilityModalLabel'
								aria-hidden='true'>
								<div class='modal-dialog modal-dialog-centered'>
									<div class='modal-content'>
										<div class='modal-body px-4 py-4'>
											<button
												type='button'
												class='btn-close float-start ms-0'
												data-bs-dismiss='modal'
												aria-label='Close'></button>
											<h5 class='modal-title text-center' id='utilityModalLabel'>
												Utility Bill
											</h5>
										</div>
										<div class='modal-body pb-5'>
											<form class='px-3'>
												<div class='row'>
													<div class='col-md-12'>
														<div class='mb-3'>
															<label class='form-label'>ID Front</label>
															<div class='d-block border bg-grey rounded text-center p-5'>
																<label type='button' class='file-uploader btn btn-secondary-main py-3 px-4'>
																	Upload Image
																	<input type='file' class='' placeholder='10-digit number' hidden />
																</label>
															</div>
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-md-12'>
														<div class='mb-3'>
															<label class='form-label'>Utility Bill Type</label>
															<select class='form-select mart-input'>
																<option>Utility Bill Type</option>
															</select>
														</div>
													</div>
												</div>
												<div class='row mt-3'>
													<div class='col-md-6 mx-auto'>
														<div class='d-grid'>
															<button class='btn btn-secondary-main py-3 text-uppercase'>Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<button type='button' class='mt-2 notif-switch' data-bs-toggle='modal' data-bs-target='#phoneModal'>
								<span class='float-start'>Phone Number</span>
								<span class='float-end small text-grey'>
									Not Connected <span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>

							<div
								class='modal fade'
								id='phoneModal'
								tabindex='-1'
								aria-labelledby='phoneModalLabel'
								aria-hidden='true'>
								<div class='modal-dialog modal-dialog-centered'>
									<div class='modal-content'>
										<div class='modal-body px-4 py-4'>
											<button
												type='button'
												class='btn-close float-start ms-0'
												data-bs-dismiss='modal'
												aria-label='Close'></button>
											<h5 class='modal-title text-center' id='phoneModalLabel'>
												Phone Number
											</h5>
										</div>
										<div class='modal-body pb-5'>
											<form class='px-3'>
												<div class='row'>
													<div class='mb-3'>
														<label class='form-label'>Phone Number</label>
														<input type='text' class='form-control mart-input' placeholder='Phone number' />
													</div>
												</div>
												<div class='row'>
													<div class='d-grid'>
														<button class='btn btn-secondary-main py-3 text-uppercase'>Send Otp</button>
													</div>
												</div>
											</form>
											<form class='px-3 mt-3'>
												<div class='row'>
													<div class='mb-3'>
														<label class='form-label text-muted'>OTP</label>
														<input type='text' class='form-control mart-input' placeholder='6-digit code' disabled />
													</div>
												</div>
												<div class='row'>
													<div class='d-grid'>
														<button class='btn btn-secondary-main py-3 text-uppercase disabled'>Verify & Save</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<button class='mt-2 notif-switch'>
								<span class='float-start'>2-step Verification</span>
								<span class='float-end small text-grey'>
									Off <span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>

							<button type='button' class='mt-2 notif-switch' data-bs-toggle='modal' data-bs-target='#kinModal'>
								<span class='float-start'>Next of kin</span>
								<span class='float-end small text-grey'>
									Not added <span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>

							<div class='modal fade' id='kinModal' tabindex='-1' aria-labelledby='kinModalLabel' aria-hidden='true'>
								<div class='modal-dialog modal-dialog-centered modal-lg'>
									<div class='modal-content'>
										<div class='modal-body px-4 py-4'>
											<button
												type='button'
												class='btn-close float-start ms-0'
												data-bs-dismiss='modal'
												aria-label='Close'></button>
											<h5 class='modal-title text-center' id='kinModalLabel'>
												Next of Kin
											</h5>
										</div>
										<div class='modal-body pb-5'>
											<form class='px-3'>
												<div class='row'>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>First Name</label>
															<input type='text' class='form-control mart-input' placeholder='First Name' />
														</div>
													</div>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>Last Name</label>
															<input type='text' class='form-control mart-input' placeholder='Last Name' />
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>Relationship Type</label>
															<select class='form-select mart-input'>
																<option>Mother</option>
																<option>Father</option>
															</select>
														</div>
													</div>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>Email Address</label>
															<input type='email' class='form-control mart-input' placeholder='Email Address' />
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-md-6'>
														<div class='mb-3'>
															<label class='form-label'>Phone Number</label>
															<input type='text' class='form-control mart-input' placeholder='Phone Number' />
														</div>
													</div>
												</div>
												<div class='row'>
													<div class='col-md-6 mx-auto'>
														<div class='d-grid'>
															<button class='btn btn-secondary-main py-3 text-uppercase'>Save</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<button class='mt-2 notif-switch' data-bs-toggle='modal' data-bs-target='#passwordModal'>
								<span class='float-start'>Change Password</span>
								<span class='float-end small text-grey'>
									<span class='material-icons align-middle'>chevron_right</span>
								</span>
							</button>

							<div
								class='modal fade'
								id='passwordModal'
								tabindex='-1'
								aria-labelledby='passwordModalLabel'
								aria-hidden='true'>
								<div class='modal-dialog modal-dialog-centered'>
									<div class='modal-content'>
										<div class='modal-body px-4 py-4'>
											<button
												type='button'
												class='btn-close float-start ms-0'
												data-bs-dismiss='modal'
												aria-label='Close'></button>
											<h5 class='modal-title text-center' id='passwordModalLabel'>
												Change Password
											</h5>
										</div>
										<div class='modal-body pb-5'>
											<form class='px-3'>
												<div class='row'>
													<div class='mb-3'>
														<label class='form-label'>Current Password</label>
														<input type='password' class='form-control mart-input' placeholder='Current Password' />
														<span class='material-icons field-icon text-grey'>visibility</span>
													</div>
												</div>
												<div class='row'>
													<div class='mb-3'>
														<label class='form-label'>New Password</label>
														<input type='password' class='form-control mart-input' placeholder='New Password' />
														<span class='material-icons field-icon text-grey'>visibility</span>
													</div>
												</div>
												<div class='row'>
													<div class='mb-3'>
														<label class='form-label'>Re-enter New Password</label>
														<input
															type='password'
															class='form-control mart-input'
															placeholder='Re-enter New Password'
														/>
														<span class='material-icons field-icon text-grey'>visibility</span>
													</div>
												</div>
												<div class='row'>
													<div class='d-grid'>
														<button class='btn btn-secondary-main py-3 text-uppercase'>Change & Save</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Security;
