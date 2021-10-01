import React from 'react';
import { Card } from '@material-ui/core';
import TransactionIcon from '@mui/icons-material/Mail';

const TransactionsTotal = () => {
    return (
        <>
            <div>
                <Card style={{
                    width: '90%',
                    height: '38vh',
                    margin: '10px 0 0 20px',
                }}>
                    <TransactionIcon
                        style={{
                            fontSize: 90,
                            margin: '50px 0 0 42.5%',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            color: '#1E92E5',
                        }}
                    />
                    <h3 style={{
                        margin: '50px 0 0 150px',
                        color: '#1E92E5',
                    }}>
                        TOTAL TRANSACTIONS: 92350
                    </h3>
                </Card>
            </div>
        </>
    )
}

export default TransactionsTotal;
