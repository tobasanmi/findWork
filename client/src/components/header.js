import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../modals/login';

export default class Header extends Component {
	render() {
		return (
			<div>
				<header className="header">
					<span className="App-logo">
						<Link to="/landing"> LOGO </Link>{' '}
					</span>{' '}
					<div className="App-header">
						<span id="login">
							<Link to="/login"> Login </Link>{' '}
						</span>{' '}
						<span id="signup">
							<Link to="/signup"> Signup </Link>{' '}
						</span>{' '}
					</div>{' '}
				</header>{' '}
			</div>
		);
	}
}
