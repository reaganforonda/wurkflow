import React from 'react';
import {withRouter} from 'react-router-dom';

export class DashboardMenu extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='dashboard-menu'>
                <ul>
                    <li>
                        List One
                    </li>
                    <li>
                        List Two
                    </li>
                    <li>
                        List Three
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(DashboardMenu);