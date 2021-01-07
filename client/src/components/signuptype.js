import React from 'react';
import { Link } from 'react-router-dom';

function SignUpTypes() {
	return (
		<div className="signuptypeWrapper">
			<h1>Create your Account</h1>
			<div className="signupTypeContent">
				<div>
					<h3>Job Seeker</h3>
				</div>
				<div className="userIcon">
					<i className="far fa-user-circle icon"></i>
				</div>
				<div className="signupParagraph">
					<p>
						Are you looking for your dream job?
						<br />
						Create a unique career profile with Findwork
					</p>
				</div>
				<div className="jobSeekerSignup">
					<Link to="/employeeSignUp" className="signupLink">
						JOB SEEKER
					</Link>
				</div>
			</div>
			<div className="signupTypeContent">
				<div>
					<h3>Employer</h3>
				</div>
				<div className="jobIcon">
					<i className="fas fa-user-md icon"></i>
				</div>
				<p className="signupParagraph">
					Are you looking for quality candidates?
					<br />
					Advertise and search with Findwork
				</p>
				<div className="jobSeekerSignup">
					<Link to="/employerSignUp" className="signupLink">
						EMPLOYER
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignUpTypes;
