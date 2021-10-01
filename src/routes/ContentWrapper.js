import React, { Component } from 'react';
import Sidebar from '../helpers/Sidebar';

export class ContentWrapper extends Component {
    render() {
        return (
            <>
                <div>
                    <Sidebar />
                </div>
            </>
        )
    }
}

export default ContentWrapper;
