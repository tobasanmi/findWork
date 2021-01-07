import React from 'react';


const EmployerBiodata = (props) => {
  const {values, handleChange, next} = props
 return (
   <div>
     <div className = 'jobseekerBiodata'>
         <form>
         <input type ='email' name = 'email' className = 'form-control' placeholder = 'enter email address' onChange = {handleChange}/><br/>
         <input type ='text' name = 'firstname' className = 'form-control' placeholder = 'enter firtsname' onChange = {handleChange}/><br/>
         <input type ='text' name = 'lastname' className = 'form-control' placeholder = 'enter lastname' onChange = {handleChange}/><br/>
         <input type = 'password' name = 'password' className = 'form-control' placeholder = 'password' onChange = {handleChange}/><br/>
         <button onClick = {next}>Next</button>
         </form>
       </div>
   </div>
 )
}

export default EmployerBiodata;