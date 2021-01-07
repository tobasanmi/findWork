import React from 'react'

   const JobseekerProfile = (props) => {
     const {values,handleChange,back,handleSubmit} = props
    return (
      <div className = 'jobseekerProfile'>
        <label for = 'Education'>
        <input type = 'text' name = 'school' className = 'form-control' placeholder = 'School Attended' onChange = {handleChange}/><br/>
        <input type = 'date' name = 'date' className = 'form-control' placeholder = 'date attended' onChange = {handleChange}/><br/>
        <input type = 'text' name = 'degree' className = 'form-control' placeholder = 'degree' onChange = {handleChange}/><br/>
        <input type = 'text' name = 'discipline' className = 'form-control' placeholder = 'course of study' onChange = {handleChange}/><br/>
        </label>
        <label for = 'Skills'>
          <input type = 'text' name = 'skills' className = 'form-control' placeholder = 'e.g HTML,CSS, PHP, Lavarel, React.js' onChange = {handleChange}/><br/>
        </label>
        <input type = 'text' name = 'work_history' className = 'form-control' placeholder = 'recent work history' onChange = {handleChange}/><br/>
        <input type = 'text' name = 'certification' className = 'form-control' placeholder = 'e.g HSE,PMP ' onChange = {handleChange}/><br/>
        <input type = 'text' name = 'other_experience' className = 'form-control' placeholder = 'state experience ' onChange = {handleChange}/><br/>
        <div className = 'button'>
        <button className = 'btn btn-primary' onClick = {back} >Back</button> 
        <button className = 'btn btn-primary' onClick = {handleSubmit}>Submit</button> 
        </div>
      </div>
    )
}

export default JobseekerProfile
