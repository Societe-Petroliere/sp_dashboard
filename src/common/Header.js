import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../assets/images/sp-logo.png";

const Header = () => {

    return (
        <div className="headerWrapper">
            <AppBar className="appBar" position="static">
                <Toolbar  className="toolBar">
                    <Link to='/' >
                        <img
                            src={logo} alt="logo"
                            className="logo" 
                        />
                    </Link>
                    <div className="navLinksWrapper">
                        <div className="navLinks">
                            <Link to='/' className="links">
                                <h3>HOME</h3>
                            </Link>
                            <Link to='/' className="links">
                                <h3>ABOUT</h3>
                            </Link>
                            <Link to='/' className="links">
                                <h3>CONTACTS</h3>
                            </Link>
                        </div>
                        <Link to='/signin' className="links" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" className="signin">SIGNIN</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
