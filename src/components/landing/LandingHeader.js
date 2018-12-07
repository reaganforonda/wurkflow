import React from 'react';

export default class LandingHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <header className='landing-header'>
                <h1>WurkFlow</h1>
                <div className='landing-header-btns'>
                    <button onClick={()=>this.props.handleDisplayForm()} type='button'>Register</button>
                </div>
            </header>
        )
    }
}