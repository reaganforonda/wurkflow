import React from 'react';
import DashboardMenu from '../menus/DashboardMenu';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='dashboard-container'>
                <DashboardMenu/>
                <div>
                    
                </div>
            </div>
        )
    }
}