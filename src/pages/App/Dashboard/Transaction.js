import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table"

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() =>{
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
            },
            body: JSON.stringify({
                'accountKey': '5e12aec7-1447-46a2-b1f6-b588514e4123'
            })
        };
        const fetchTransactions = async() => {
            const data = await fetch("http://localhost:8080/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", requestOptions);
            const transactions = await data.json();
            console.log(transactions);
            setTransactions(transactions);
        };
        fetchTransactions();
    }, [])

    return(
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
                <th>Transaction Id</th>
                <th>Order Type</th>
                <th>Timestamp</th>
                <th>Asset Symbol</th>
                <th>Asset Amount</th>
                <th>Asset Price</th>
                <th>Cash Amount</th>
            </tr>
          </thead>

          <tbody>
            { transactions.map(transaction => (
            <tr key={transaction.transactionId}>
                <th>{transaction.transactionId}</th>
                <th>{transaction.orderType}</th>
                <th>{transaction.timestamp}</th>
                <th>{transaction.assetSymbol}</th>
                <th>{transaction.assetAmount}</th>
                <th>${transaction.assetPrice}</th>
                <th>${transaction.cashAmount}</th>
            </tr>
            ))}
          </tbody>
        </Table>
    )
}
export default Transaction