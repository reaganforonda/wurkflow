import React from 'react';


export default class RegisterForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            firstName: '',
            lastName: '',
            email: '',
            pw: '',
            confirmPW: ''
        }
    }

    render(){
        return (
            <form className='register-form'>
                <div className='register-row'>
                    <input required={true} name='firstName' placeholder='First Name'/>
                </div>
                <div className='register-row'>
                    <input required={true} name='lastName' placeholder='Last Name'/>
                </div>
                <div className='register-row'>
                    <input required={true} name='email' placeholder='Email'/>
                </div>
                <div className='register-row'>
                    <input required={true} name='pw' placeholder='Password'/>
                </div>
                <div className='register-row'>
                    <input required={true} name='confirmPW' placeholder='Confirm Password'/>
                </div>
                <div className='register-row'>
                    <button onClick={this.props.displayRegisterForm}>Cancel</button>
                    <button>Register</button>
                </div>
            </form>
        )
    }
}