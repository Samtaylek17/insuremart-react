import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import path from './routes/routes';

import Register from './components/onboarding/register';
import Login from './components/onboarding/login';
import Dashboard from './components/pages/dashboard';
import Profile from './components/settings/profile';
import Socials from './components/settings/socials';
import Notification from './components/settings/notification';
import Security from './components/settings/security';
import ForgotPassword from './components/onboarding/forgot_password';

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route path={path.SIGNUP} component={Register} />
					<Route path={path.LOGIN} component={Login} />
					<Route path={path.PROFILE} component={Profile} />
					<Route path={path.SOCIALS} component={Socials} />
					<Route path={path.NOTIFICATION} component={Notification} />
					<Route path={path.SECURITY} component={Security} />
					<Route path={path.FORGOTPASSWORD} component={ForgotPassword} />
				</Switch>
			</Router>
		);
	}
}

export default App;
