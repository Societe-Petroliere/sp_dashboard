import { Card } from '@material-ui/core';
import React, { Component } from 'react';
import Plot from 'react-plotly.js';

export class TransactionsPlot extends Component {
    render() {
        return (
            <>
                <Card style={{
                    width: '90%',
                    height: '38vh',
                    margin: '10px 0 0 15px',
                }}>
                    <Plot
                        data={[
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: '#1E92E5'},
                        },
                        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                        ]}
                        layout={ {width: 580, height: 380, title: 'Transactions Plot'} }
                    />
                </Card>
            </>
        )
    }
}

export default TransactionsPlot;
