import React from 'react';
import { Link } from 'react-router-dom';
import path from '../../routes/routes';

const Login = () => {
	return (
		<>
			<header>
				<nav class='navbar navbar-light'>
					<div class='container'>
						<Link class='navbar-brand' to='#'>
							<img src='assets/img/logo.png' alt='logo' />
						</Link>
					</div>
				</nav>
			</header>
			<main>
				<div class='container'>
					<div class='row'>
						<div class='col-md-5 ms-auto'>
							<div class='card auth-card pt-5 px-4 px-sm-5'>
								<h4 class='fw-bold'>Welcome Back!</h4>
								<p class='fs-6'>Please Login</p>
								<form>
									<div class='mb-3'>
										<label class='form-label'>Email</label>
										<input type='email' class='form-control auth-field' placeholder='Email' />
										<span class='text-danger fs-6 mt-1'>Email does not exist</span>
									</div>
									<div class='mb-3'>
										<label class='form-label'>Password</label>
										<input type='password' class='form-control auth-field' placeholder='Password' />
										<i class='fas fa-eye field-icon'></i>
									</div>
									<p class='text-end text-green fw-bold'>
										<Link to={path.FORGOTPASSWORD} className='text-decoration-none'>
											<span className='text-green fw-bold'> Forgot Password?</span>
										</Link>
									</p>
									<div class='mb-3'>
										<div class='d-grid gap-2'>
											<button class='btn btn-md btn-secondary-main py-3 text-uppercase'>Login</button>
										</div>
									</div>
								</form>
								<p>Or login with</p>
								<div class='row'>
									<div class='social-icon'>
										<i class='fab fa-facebook-square facebook-blue fs-5'></i>
									</div>
									<div class='social-icon'>
										<i class='fab fa-google google-red fs-5'></i>
									</div>
								</div>
								<p class='my-4'>
									Don't have an account?{' '}
									<Link to={path.SIGNUP} className='text-decoration-none'>
										<span class='text-green fw-bold'>Sign Up</span>
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

export default Login;
