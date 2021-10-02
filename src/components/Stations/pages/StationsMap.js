import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import SPStations from '../../../assets/images/SP-stations.png';

export class StationsMap extends Component {
    render() {
        return (
            <>
                <Card style={{
                    width: '90%',
                    height: '38vh',
                    margin: '10px 0 0 20px',
                }}>
                    <img src={SPStations} alt="SPStations" style={{ width: '100%', height: '120%' }} />
                </Card>
            </>
        )
    }
}

export default StationsMap;
