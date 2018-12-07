import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export class RegisterForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            firstName: '',
            lastName: '',
            email: '',
            pw: '',
            confirmPW: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();

        let user = Object.assign({}, this.state)

        axios.post('/api/auth/register', user).then((result) => {
            this.props.history.push('/dashboard');
        }).catch((err) => {
            // TODO:
            console.log(err);
        })
    }

    render(){
        return (
            <form onSubmit={(e)=> this.handleFormSubmit(e)} className='register-form'>
                <div className='register-row'>
                    <input type='text' required={true} name='firstName' placeholder='First Name' value={this.state.firstName} 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div className='register-row'>
                    <input type='text' required={true} name='lastName' placeholder='Last Name' value={this.state.lastName} 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div className='register-row'>
                    <input type='email' required={true} name='email' placeholder='Email' value={this.state.email} 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div className='register-row'>
                    <input type='password' maxLength={25} minLength={8} required={true} name='pw' placeholder='Password' value={this.state.pw} 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div className='register-row'>
                    <input type='password' required={true} name='confirmPW' placeholder='Confirm Password' value={this.state.confirmPW} 
                        onChange={(e)=> this.handleInputChange(e)}/>
                </div>
                <div className='register-row'>
                    <button onClick={this.props.displayRegisterForm}>Cancel</button>
                    <button>Register</button>
                </div>
            </form>
        )
    }
}

export default withRouter(RegisterForm);