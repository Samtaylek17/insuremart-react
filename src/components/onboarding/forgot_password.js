import React from 'react';
import { Link } from 'react-router-dom';
import path from '../../routes/routes';

const ForgotPassword = () => {
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
					<div className='row my-5'>
						<div className='col-md-5 mx-auto my-5'>
							<div className='card auth-card pt-5 px-4 px-sm-5'>
								<h4 className='fw-bold'>Forgot password?</h4>
								<p className='fs-6'>Enter your email and a recovery mail would be sent to you.</p>
								<form>
									<div className='row'>
										<div className='col-md-12'>
											<div className='mb-3'>
												<label className='form-label'>Email</label>
												<input type='email' className='form-control auth-field' placeholder='Email' />
											</div>
										</div>
									</div>

									<div className='mb-3 mt-4'>
										<div className='d-grid gap-2'>
											<button className='btn btn-md btn-secondary-main py-3 text-uppercase'>Sign Up</button>
										</div>
									</div>
								</form>
								<p className='my-4'>
									Remembered?
									<Link to={path.LOGIN} className='text-decoration-none'>
										<span className='text-green fw-bold'> Login</span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default ForgotPassword;
