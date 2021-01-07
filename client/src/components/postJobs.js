import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PostJobs extends Component {
	state = {
		company: '',
		industry: '',
		location: '',
		qualification: '',
		experience: '',
		job_level: '',
		job_summary: '',
		job_description: '',
		job_title: '',
		employer_id: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(this.state);
	};

	// method to clear input field after submission of form
	clearInputField = () => {
		this.setState({
			company: '',
			industry: '',
			location: '',
			qualification: '',
			experience: '',
			job_level: '',
			job_summary: '',
			job_description: '',
			job_title: '',
		});
	};

	handleSubmit = async (e) => {
		const {
			industry,
			location,
			qualification,
			experience,
			job_level,
			job_summary,
			job_description,
			job_title,
			company,
		} = this.state;
		e.preventDefault();
		if (
			(company,
			industry,
			location,
			qualification,
			experience,
			job_level,
			job_summary,
			job_description,
			job_title === '')
		) {
			alert('fill out the empty fields');
		} else {
			let h = new Headers();
			let token = localStorage.getItem('token');
			h.append('Authorization', `Bearer ${token}`);
			await fetch(`http://localhost:3001/jobs/addjobs`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this.state),
			})
				.then((response) => response.json())
				.then((jsonResponse) => {
					console.log('response', jsonResponse.message);
					if (jsonResponse.message === 'created successfully') {
						alert('You have posted a job successfully');
						this.clearInputField();
					} else {
						alert('Failed to post a job');
						this.clearInputField();
					}
				})
				.catch((err) => console.log(err));
		}
	};
	render() {
		const { handleSubmit, handleChange } = this;
		return (
			<div className="postJobWrapper">
				<div className="formContainer">
					<h3 className="postJobHeader"> Post a Job </h3>
					<form>
						<input
							type="text"
							name="company"
							className="form-control postJobInput"
							placeholder="enter name of hiring company "
							required
							onChange={handleChange}
						/>{' '}
						<input
							type="text"
							name="industry"
							className="form-control postJobInput"
							placeholder="enter industry e.g IT"
							required
							onChange={handleChange}
						/>{' '}
						<br />
						<input
							type="text"
							name="location"
							className="form-control postJobInput"
							placeholder="enter location of job"
							onChange={handleChange}
						/>{' '}
						<br />
						<input
							type="text"
							name="qualification"
							className="form-control postJobInput"
							placeholder="enter quaalification required"
							onChange={handleChange}
						/>{' '}
						<br />
						<input
							type="text"
							name="experience"
							className="form-control postJobInput"
							placeholder="enter years of experience required"
							onChange={handleChange}
						/>{' '}
						<br />
						<input
							type="text"
							name="job_level"
							className="form-control postJobInput"
							placeholder="full-time/part-time"
							onChange={handleChange}
						/>{' '}
						<br />
						<textarea
							name="job_summary"
							className="form-control postJobInput"
							placeholder="enter job summary"
							onChange={handleChange}
						/>{' '}
						<br />
						<textarea
							name="job_description"
							className="form-control postJobInput"
							placeholder="enter job description"
							onChange={handleChange}
						/>{' '}
						<br />
						<input
							type="text"
							name="job_title"
							className="form-control postJobInput"
							placeholder="enter title of job e.g front-end developer"
							onChange={handleChange}
						/>{' '}
						<br />
						<button className="btn btn-success postButton" onClick={handleSubmit}>
							Post{' '}
						</button>{' '}
					</form>{' '}
				</div>{' '}
			</div>
		);
	}
}

export default withRouter(PostJobs);
