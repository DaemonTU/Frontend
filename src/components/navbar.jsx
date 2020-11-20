import React from 'react';
import '../static/css/navbar.css';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar-wrapper">
            <Link to="/">
                <div className="navbar-brand">
                    DAEMON
                </div>
            </Link>
            <div className="navbar-options-wrapper">
                <ul className="navbar-options-list">
                    <li className="navbar-item">
                            PAYMENTS
                    </li>
                    <Link to="/news">
                    <li className="navbar-item">
                            NEWS
                    </li>
                    </Link>
                    <Link to="/team" style={{"textDecoration": "none"}}>
                    <li className="navbar-item">
                            TEAM
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;