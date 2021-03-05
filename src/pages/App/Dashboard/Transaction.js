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
                'accountKey': 'cDTeVIWCMlJm7Uo 4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
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
                <th>transactionId</th>
                <th>orderType</th>
                <th>timestamp</th>
                <th>assetSymbol</th>
                <th>assetAmount</th>
                <th>assetPrice</th>
                <th>cashAmount</th>
            </tr>
          </thead>

          <tbody>
            { transactions.map(transaction => (
            <tr key={transaction.dateTime}>
                <th>{transaction.transactionId}</th>
                <th>{transaction.orderType}</th>
                <th>${transaction.timestamp}</th>
                <th>{transaction.assetSymbol}</th>
                <th>{transaction.assetAmount}</th>
                <th>{transaction.assetPrice}</th>
                <th>{transaction.cashAmount}</th>
            </tr>
            ))}
          </tbody>
        </Table>
    )
}
export default Transaction