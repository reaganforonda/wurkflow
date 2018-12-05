import React from 'react';

export default class Landing extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className='landing-container'>
                <header className='landing-header'>
                    
                </header>
                <main className='landing-main'>
                    <div className='main-center'>
                        Wurkflow
                    </div>
                    <form className='landing-form'>
                        <input required={true} type='email' onChange={(e)=>this.handleInputChange(e)} name='email' placeholder='Email' value={this.state.email}/>
                        <input required={true} type='password' onChange={(e)=>this.handleInputChange(e)} name='pw' placeholder='Password' value={this.state.pw}/>
                        <button>Login</button>
                    </form>
                </main>
            </div>
        )
    }
}