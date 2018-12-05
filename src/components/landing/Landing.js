import React from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

export default class Landing extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: '',
            displayRegisterForm: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleDisplayForm = this.handleDisplayForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            pw : this.state.pw
        }
        
        alert('fuck');
    }

    handleDisplayForm(){
        if(this.state.displayRegisterForm) {
            this.setState({displayRegisterForm: false});
        } else {
            this.setState({displayRegisterForm: true});
        }
    }

    render(){
        return (
            <div className='landing-container'>
                <header className='landing-header'>
                    
                </header>
                <main className='landing-main'>
                    <div className='main-center'>
                        <h1>Wurkflow</h1>
                    </div>
                    <form onSubmit={(e)=>this.handleFormSubmit(e)} className='landing-form'>
                        <input required={true} type='email' onChange={(e)=>this.handleInputChange(e)} 
                            name='email' placeholder='Email' value={this.state.email}/>
                        <input required={true} type='password' onChange={(e)=>this.handleInputChange(e)} 
                            name='pw' placeholder='Password' value={this.state.pw}/>
                        <button>Login</button>
                    </form>
                </main>
                {
                    this.state.displayRegisterForm ? <RegisterForm displayRegisterForm={this.handleDisplayForm}/> : null
                }
                <footer>
                    Developed by Reagan Foronda [Helius Labs]
                </footer>
            </div>
        )
    }
}