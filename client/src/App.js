import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Login from './modals/login';
import JobseekersignUpContainer from './components/jobseeker/jobseekersignUpContainer';
import EmployerSignupWrapper from './components/employer/employerSignupWrapper';
import Landing from './components/landing'
import { Route, Switch } from 'react-router-dom';
import SignUpTypes from './components/signuptype';
import EmployerHome from './components/employer/employerHome'
import JobseekerHome from './components/jobseeker/jobseekerHome'
import PostJobs from './components/postJobs';
import ProtectedRoutes from './components/protectedRoutes';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route exact path = '/signup' component = {SignUpTypes}/>
        <Route exact path = '/employerSignUp' component = {EmployerSignupWrapper}/>
        <Route exact path = '/employeeSignUp' component = {JobseekersignUpContainer}/>
        <ProtectedRoutes exact path = '/employerhome' component = {EmployerHome}/>
        <ProtectedRoutes exact path = '/freelancerhome' component = {JobseekerHome}/>
        <ProtectedRoutes exact path = '/postJobs' component = {PostJobs}/> 
      </Switch>
      {/* <EmployerSignupWrapper/> */}
      {/* <JobseekersignUpContainer/> */}
      {/* <Header/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
