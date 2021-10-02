import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Header from '../../../common/Header';

import Footer from '../../../common/Footer';

export class Signin extends Component {
    render() {
        return (
            <div>
                <Header />
                <Card className="card">
                    <h1>Signin</h1>
                    <div className="formContainer">
                        <FormControl className="form" fullWidth variant="outlined">
                            <InputLabel className="username" htmlFor="outlined-username">Enter Username</InputLabel>
                            <OutlinedInput
                                type="text"
                                // error={state.fieldsRequired}
                                labelWidth={128}
                                name="username"
                                // value={state.email}
                                // onChange={handleEmailChange}
                            />
                        </FormControl>
                        <FormControl className="form" fullWidth variant="outlined">
                            <InputLabel className="password" htmlFor="outlined-password">Enter Password</InputLabel>
                            <OutlinedInput
                                type="password"
                                // error={state.fieldsRequired}
                                labelWidth={128}
                                name="password"
                                // value={state.password}
                                // onChange={handlePasswordChange}
                            />
                        </FormControl>
                        <Link to="/sp-ops/dashboard" style={{ textDecoration: 'none' }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="signin"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </Card>
                <Footer />
            </div>
        )
    }
}

export default Signin;
