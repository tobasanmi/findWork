import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

 class EmployerHome extends Component {

  state = {
    jobsInformation : []
  }
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

  render() {
    return (
      <div className = 'jobSeekerContainer'>
        <div className = 'jobseekerHeader'>
          <div className = 'logo'>LOGO</div>
          <div className = 'jobseekerNav'>
            <ul className = 'jobseekerNavItemsWrapper'>
              <li className  ='jobseekerNavItems'><Link to = '' className ='jobseekerNavItemsLink' >Profile</Link></li>
              <li className = 'jobseekerNavItems'><Link to ='/postJobs' className ='jobseekerNavItemsLink'>PostJobs</Link></li>
              <li className = 'jobseekerNavItems'><Link to ='' className ='jobseekerNavItemsLink' onClick = {this.handleClick}>Logout</Link></li>
            </ul>
          </div> 
          </div>  
         <div className = 'jobseekerMain'>
           <div className = 'jobsCard'>
             {this.state.jobsInformation.map((items,index)=>{
               return <div>
                     <h3 className = 'jobsTitle'>{items.job_title}</h3>
             <div>
               <ul className = 'jobsCardContentWrapper'>
                 <li className = 'jobsCardContent'>Company: <span>{items.company}</span></li>
                 <li className = 'jobsCardContent'>Industry : <span>{items.industry}</span></li>
                 <li className = 'jobsCardContent'>Experience level : <span>{items.experience}</span></li>
                 <li className = 'jobsCardContent'>Location : <span>{items.location}</span></li>
                 <li className = 'jobsCardContent'>work Type : <span>{items.job_level} </span></li>
                 <li className = 'jobsCardContent'>Job Description : <span>You'll create, maintain, audit and impr</span></li>
                  <li className = 'submitBidButton'> Delete Job</li>
               </ul>
             </div>
               </div>
             }
             )}
            
           </div>
           </div>       
      </div>
    )
  }
}
export default withRouter(EmployerHome);