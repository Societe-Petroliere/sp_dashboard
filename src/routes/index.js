import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from '../components/Auth/pages/Signin';
import Signout from '../components/Auth/pages/Signout';
import Home from '../components/Home';
import ContentWrapper from './ContentWrapper';

export class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/sp-ops/dashboard" component={ContentWrapper} />
                        <Route exact path="/signout" component={Signout} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
