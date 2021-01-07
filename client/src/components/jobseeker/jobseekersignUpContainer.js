import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getuserInput } from '../../actions/signupActions'
import JobseekerBiodata from './jobseekerBiodata'
import JobseekerProfile from '../jobseeker/jobseekerProfile'



export default class JobseekersignUpContainer extends Component {
  state = {
    step:1,
    email : '',
    firstname : '',
    lastname : '',
    password : '',
    school : '',
    date: '',
    degree : '',
    discipline : '',
    skill: '',
    work_history : '',
    certification : '',
    other_experience: '',
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

  handleSubmit = async (e) => {
      e.preventDefault();
      await fetch(`http://localhost:3001/freelancer/addfreelancer`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(this.state)
      })
      .then(response => response.json())
      .then(data => {
        console.log('>>>', data);
        if(data.message === 'Created successfully '){
          alert({'message': 'succesfull registration'});
        }else if(data.message !== 'Created successfully'){
          alert({'message': 'failed registration'});
        }
      }).catch((err) => {
        console.log(err)
      })
        // console.log('state', this.state)
  }
  render() {
   
    if(this.state.step === 1){
      return <JobseekerBiodata 
        next={this.next}
        handleChange = {this.handleChange}
        // values = {values}
      />
    }
    else if(this.state.step === 2){
      return <JobseekerProfile
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


const mapStateToProps = (state) => {
  const {userReducer} = state;
  return {
  signupFormDetails: userReducer.signupFormDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getsignupInputs : (values) => dispatch(getuserInput(values))
  }
}

connect(mapStateToProps,mapDispatchToProps)(JobseekersignUpContainer) 