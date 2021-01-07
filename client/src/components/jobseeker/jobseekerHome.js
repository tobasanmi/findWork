import React, { Component, Fragment } from 'react';
import { Link,withRouter } from 'react-router-dom';

 class JobseekerHome extends Component {
	state = {
		jobsInformation: [],
	};


	handleClick = (e) => {
    e.preventDefault()
    const removeToken = localStorage.clear()
    const landing = this.props.history.push('/')
    return landing;
	}
	


	componentDidMount = async () =>{
	  await fetch('http://localhost:3001/jobs/getjobs', {
	    method : 'GET',
	    headers: {'Content-type': 'application/json'}
	  }).then(response => response.json())
	  .then(jsonResponse => {
	    if(jsonResponse){
        console.log('data',jsonResponse.data);
	      this.setState({
	      jobsInformation: this.state.jobsInformation.concat(jsonResponse.data)
	      })
	    }
	  })
	  .catch(err => console.log(err));
	  }

	// mounting = () => {
	//   this.setState({
	//     jobsInformation: Object.assign()
	//   })
	// }
	render() {
    console.log('state', this.state.jobsInformation);
		return (
      <Fragment>
			<div className="jobSeekerContainer">
				<div className="jobseekerHeader">
					<div className="logo">LOGO</div>
					<div className="jobseekerNav">
						<ul className="jobseekerNavItemsWrapper">
							<li className="jobseekerNavItems">
								<Link to="" className="jobseekerNavItemsLink">
									Profile
								</Link>
							</li>
							<li className="jobseekerNavItems">
								<Link to="" className="jobseekerNavItemsLink">
									Jobs
								</Link>
							</li>
							<li className="jobseekerNavItems">
								<Link to="/" className="jobseekerNavItemsLink" onClick = {this.handleClick}>
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="jobseekerMain">
					<div className="jobsCard">
            {this.state.jobsInformation.map(function (items,index){ 
              console.log('item',items);
              return<div> 
              <h3 className="jobsTitle" key= {index}>{items.job_title}</h3>
              <div>
                <ul className="jobsCardContentWrapper">
                  <li className="jobsCardContent">
                    Company: <span>{items.company}</span>
                  </li>
                  <li className="jobsCardContent">
                    Industry : <span>{items.industry}</span>
                  </li>
                  <li className="jobsCardContent">
                    Experience level : <span>{`${items.experience}`}</span>
                  </li>
                  <li className="jobsCardContent">
                    Location : <span>{items.location}</span>
                  </li>
                  <li className="jobsCardContent">
                    work Type : <span>{items.job_level} </span>
                  </li>
                  <li className="jobsCardContent">
                    Job Description :{' '}
                    <span>
                      {items.job_description}
                    </span>
                  </li>
                  <li className="submitBidButton"> Submit Bid</li>
                </ul>
              </div>
              </div>
            })}
					</div>
				</div>
			</div>
      </Fragment>
		);
	}
}


export default withRouter(JobseekerHome)