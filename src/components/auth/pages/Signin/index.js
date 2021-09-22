import React, { Component } from 'react';
import { Button, Card, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import Header from '../../../../common/Header';

import Footer from '../../../../common/Footer';

export class Signin extends Component {
    render() {
        return (
            <div>
                <Header />
                <Card className="card">
                    <h1>Signin</h1>
                    <div className="formContainer">
                        <FormControl className="form" fullWidth variant="outlined">
                            <InputLabel className="email" htmlFor="outlined-email">Enter Email</InputLabel>
                            <OutlinedInput
                                type="email"
                                // error={state.fieldsRequired}
                                labelWidth={128}
                                name="email"
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="signin"
                            
                        >
                            Sign In
                        </Button>
                    </div>
                </Card>
                <Footer />
            </div>
        )
    }
}

export default Signin;
