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
                    <input name='firstName' placeholder='First Name'/>
                </div>
                <div className='register-row'>
                    <input name='lastName' placeholder='Last Name'/>
                </div>
                <div className='register-row'>
                    <input name='email' placeholder='Email'/>
                </div>
                <div className='register-row'>
                    <input name='pw' placeholder='Password'/>
                </div>
                <div className='register-row'>
                    <input name='confirmPW' placeholder='Confirm Password'/>
                </div>
            </form>
        )
    }
}