import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
        user: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log('state', this.state);
    };

    handleSubmit = async(e) => {
        e.preventDefault();
        if (this.state.user === 'employer') {
            await fetch(`http://localhost:3001/user/employerlogin`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.state),
                })
                .then((response) => response.json())
                .then((jsonResponse) => {
                    console.log('token', jsonResponse.token);
                    if (jsonResponse.token !== null && jsonResponse.message !== 'invalid password') {
                        localStorage.setItem('token', jsonResponse.token);
                        const currentRoute = this.props.history.location.pathname;
                        if (currentRoute === '/') {
                            this.props.history.push('employerhome');
                        } else {
                            this.props.history.push(currentRoute);
                        }
                    }
                })
                .catch((e) => console.log(e));
        } else {
            await fetch(`http://localhost:3001/user/freelancerlogin`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.state),
                })
                .then((response) => response.json())
                .then((jsonResponse) => {
                    console.log('token', jsonResponse.token);
                    if (jsonResponse.token !== null && jsonResponse.message !== 'invalid password') {
                        localStorage.setItem('token', jsonResponse.token);
                        const currentRoute = this.props.history.location.pathname;
                        if (currentRoute === '/') {
                            this.props.history.push('freelancerhome');
                        } else {
                            this.props.history.push(currentRoute);
                        }
                    }
                })
                .catch((e) => console.log(e));
        }
    };
    render() {
        return ( <
            div className = "loginFormWrapper" >
            <
            div className = "loginForm" >
            <
            div >
            <
            h3 > Log in and get to work < /h3> <
            /div> <
            div className = "loginFormContainer" >
            <
            form >
            <
            input type = "email"
            name = "email"
            className = "form-control loginInput"
            placeholder = "Enter your email"
            onChange = { this.handleChange }
            /> <
            br / >
            <
            input type = "password"
            name = "password"
            className = "form-control loginInput"
            placeholder = "Enter your password"
            onChange = { this.handleChange }
            /> <
            br / >
            <
            select name = "user"
            className = "form-control loginInput"
            onChange = { this.handleChange } >
            <
            option > Select type of user < /option> <
            option value = "employer" > Employer < /option> <
            option value = "worker" > Worker < /option> <
            /select> <
            div className = "stayLoginContainer" >
            <
            span >
            <
            input type = "checkbox" / > Keep me logged in
            <
            /span> <
            span className = "forgetpassword" >
            <
            Link > Forget Password ? < /Link> <
            /span> <
            /div> <
            button className = "continueButton"
            onClick = { this.handleSubmit } >
            Continue <
            /button> <
            /form> <
            /div> <
            div style = {
                { width: '100%' } } >
            <
            h5 > New to Findjob ? < /h5> <
            span className = "signUpButton" >
            <
            Link to = "/signup"
            style = {
                { color: 'white' } } >
            Sign Up <
            /Link> <
            /span> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default withRouter(Login);