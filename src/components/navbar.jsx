import React from 'react';
import '../static/css/navbar.css';
import {Link,Redirect} from 'react-router-dom';
function Navbar(){
    function logoutUser(){
        sessionStorage.removeItem('user_token'); 
        document.cookie = 'session=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href="http://daemon.abbhutto.com/login"
    }
    return(
        <React.Fragment>
        {sessionStorage.getItem('user_token') && <Redirect to="/" />}
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
                    <Link to="/post" style={{"textDecoration": "none"}}>
                    <li className="navbar-item">
                            SHARE
                    </li>
                    </Link>
                    <li className="navbar-item" onClick={() => logoutUser()}>
                            LOGOUT
                    </li>
                </ul>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Navbar;