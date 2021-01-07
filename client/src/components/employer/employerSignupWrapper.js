import React, {Component} from 'react';
import CompanysDetails from '../employer/companysDetails'
import EmployerBiodata from '../employer/employersBioData';

class EmployerSignupWrapper extends Component {
  state = {
    step:1,
    email : '',
    firstname : '',
    lastname : '',
    password : '',
    company_name : '',
    company_email: '',
    industry: '',
    employer_type: '',
    contact_person: '',
    phone: '',
    address: '',
  }
  
  // process to next step 
  next = () => {
    this.setState(prevState =>{
      return {step: prevState.step + 1}
    })
  }
  //process to back 
  back = () => {
    this.setState(prevState => {
      return {step:prevState.step - 1}
    })
  }
  // handle all the field changes
  handleChange = (e)=>{
    // const {getsignupInputs} = this.props
    //   getsignupInputs({[e.target.name]:e.target.value})
    //   // console.log('state',this.state);
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log('state', this.state);
  }
  // handle form submit 

  handleSubmit = () => {
        
        this.setState(
          {signupSuccess: true}
        )
        // console.log('state', this.state)
  }
  render() {
    // const {email,
    //   firstname,
    //   lastname,
    //   password,
    //   school,
    //   date,
    //   degree,
    //   discipline,
    //   skills,
    //   work_history,
    //   certification,
    //   other_experience,} = this.state;
    // const values = {email,
    // firstname,
    // lastname,
    // password,
    // school,
    // date,
    // degree,
    // discipline,
    // skills,
    // work_history,
    // certification,
    // other_experience,}
    // console.log('state', this.state)
    if(this.state.step === 1){
      return <EmployerBiodata
        next={this.next}
        handleChange = {this.handleChange}
        // values = {values}
      />
    }
    else if(this.state.step === 2){
      return <CompanysDetails
      back = {this.back}
      handleChange = {this.handleChange}
      handleSubmit = {this.handleSubmit}
      // values = {values}
      />
    }
    console.log('state', this.props.signupFormDetails)
    return (
      <div>
        
      </div>
    )
  }
}

export default EmployerSignupWrapper