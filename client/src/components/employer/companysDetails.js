import React from 'react';

const CompanysDetails = (props) => {
	const { values, handleChange, back } = props;
	return (
		<div className="companydetailsWrapper">
			<div className="companydetailsContent">
				<label>
					{' '}
					Company's Details
					<input
						type="email"
						name="company_email"
						className="form-control companyInput"
						placeholder="Company's email"
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						name="company_name"
						className="form-control companyInput"
						placeholder="Name of company"
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						name="industry"
						className="form-control companyInput"
						placeholder="industry type e.g IT"
						onChange={handleChange}
					/>
					<br />
					<select name="employment_type" className="form-control companyInput" onChange={handleChange}>
						<option>Select type of employment</option>
						<option value="full-time">Full Time</option>
						<option value="part-time">Part Time</option>
					</select>
					<input
						type="text"
						name="contact_person"
						className="form-control companyInput"
						placeholder="Contact person"
						onChange={handleChange}
					/>
					<br />
					<input
						type="number"
						name="phone"
						className="form-control companyInput"
						placeholder="Enter phone number"
						onChange={handleChange}
					/>
					<br />
					<input
						type="text"
						name="address"
						className="form-control companyInput"
						placeholder="Address"
						onChange={handleChange}
					/>
					<br />
				</label>
				<div className="button">
					<button className="btn btn-primary " onClick={back}>
						Back
					</button>
					<button className="btn btn-primary">Submit</button>
				</div>
			</div>
		</div>
	);
};

export default CompanysDetails;
