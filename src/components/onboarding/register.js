import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<>
			<header>
				<nav className='navbar navbar-light'>
					<div className='container'>
						<Link className='navbar-brand' to='#'>
							<img src='assets/img/logo.png' height='55px' alt='logo' />
						</Link>
					</div>
				</nav>
			</header>
			<main>
				<div className='container'>
					<div className='row'>
						<div className='col-md-10 mx-auto my-5'>
							<div className='card auth-card pt-5 px-4 px-sm-5'>
								<h4 className='fw-bold'>Create an account</h4>
								<p className='fs-6'>Fill the form below to continue</p>
								<form>
									<div className='row'>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>First Name</label>
												<input type='text' className='form-control auth-field' placeholder='First Name' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Last Name</label>
												<input type='text' className='form-control auth-field' placeholder='Last Name' />
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Email Address</label>
												<input type='email' className='form-control auth-field' placeholder='Email Address' />
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Password</label>
												<input type='password' className='form-control auth-field' placeholder='Password' />
												<i className='fas fa-eye field-icon'></i>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='mb-3'>
												<label className='form-label'>Re-enter Password</label>
												<input type='password' className='form-control auth-field' placeholder='Re-enter Password' />
												<i className='fas fa-eye field-icon'></i>
											</div>
										</div>
									</div>

									<div className='mb-3 mt-4'>
										<div className='d-grid gap-2'>
											<button className='btn btn-md btn-secondary-main py-3 text-uppercase'>Sign Up</button>
										</div>
									</div>
								</form>
								<p>Or sign up using</p>
								<div className='row'>
									<div className='social-icon'>
										<i className='fab fa-facebook-square facebook-blue fs-5'></i>
									</div>
									<div className='social-icon'>
										<i className='fab fa-google google-red fs-5'></i>
									</div>
								</div>
								<p className='my-4'>
									By continuing you agree to our <span className='text-green fw-bold'>Terms of Use</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Register;
