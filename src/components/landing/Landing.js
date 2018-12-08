import React from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import LandingHeader from './LandingHeader';
import {withRouter} from 'react-router-dom';

export class Landing extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: '',
            displayRegisterForm: false
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
        let user = Object.assign({}, this.state);

        axios.post('/api/auth/login', user).then((result)=> {
            this.props.history.push('/dashboard');
        }).catch((err) => {
            // TODO:
            console.log(err);
        })
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
                <div className='landing-header-container'>
                    <LandingHeader handleDisplayForm={this.handleDisplayForm}/>
                </div>
                <main className='landing-main'>
                    <div className='main-center'>
                        <h1>Wurkflow</h1>
                        <form onSubmit={(e)=>this.handleFormSubmit(e)} className='landing-form'>
                            <div className='landing-form-row'>
                                <input required={true} type='email' onChange={(e)=>this.handleInputChange(e)} 
                                    name='email' placeholder='Email' value={this.state.email}/>
                            </div>
                            <div className='landing-form-row'>
                                <input required={true} type='password' onChange={(e)=>this.handleInputChange(e)} 
                                    name='pw' placeholder='Password' value={this.state.pw}/>
                            </div>
                            <div className='landing-form-row'>
                                <button onClick={(e)=> this.handleFormSubmit(e)}>Login</button>
                            </div>
                        </form>
                    </div>
                </main>
                {
                    this.state.displayRegisterForm ? <RegisterForm displayRegisterForm={this.handleDisplayForm}/> : null
                }
                <footer>
                    Developed by Reagan Foronda
                </footer>
            </div>
        )
    }
}

export default withRouter(Landing);