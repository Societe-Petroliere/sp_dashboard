import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from "../../assets/images/sp-logo.png";
import { Button } from '@material-ui/core';


const Header = () => {

    return (
        <div className="headerWrapper">
            <AppBar className="appBar" position="static">
                <Toolbar  className="toolBar">
                    <img
                        src={logo} alt="logo"
                        className="logo"
                        style={{ width: 120 }}
                    />
                    <div className="navLinksWrapper">
                        <div className="navLinks">
                            <h3>HOME</h3>
                            <h3>ABOUT</h3>
                            <h3>CONTACTS</h3>
                        </div>
                        <Button variant="contained" className="signin">SIGNIN</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
