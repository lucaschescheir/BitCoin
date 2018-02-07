import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DashBoard extends Component {
    render() {
        return(
            <div className="overview">
                <nav>
                    <ul>
                        <li><Link to="/overview" className="link"><h1>OverView</h1></Link></li>
                        <li><Link to="/minertype" className="link"><h1>MinerType</h1></Link></li>
                        <li><Link to="/pools" className="link"><h1>Pools</h1></Link></li>
                        <li><Link to="/temperature" className="link"><h1>Temperature</h1></Link></li>
                        <li><Link to="/farms" className="link"><h1>Farms</h1></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default DashBoard;
