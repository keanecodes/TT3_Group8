import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";

const url = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek'


const History = () => {
    const [historical, setHistory] = useState([]);

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
        const fetchHistory = async() => {
            const data = await fetch("http://localhost:8080/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical", requestOptions);
            const historical = await data.json();
            console.log(historical);
            setHistory(historical);
        };
        fetchHistory();
    }, [])

    // const date = new Date(data['timestamp']*1000)
    // const dates = ["2018-09-12", "2018-10-18", "2018-12-30"];
    // const filteredDates = dates.filter(d => new Date(d) - new Date() > 0);
    // events = events.filter(a => new Date(a.startDate) - new Date > 0);

    
    return(
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
                <th>Price</th>
                <th>Asset Symbol</th>
                <th>Timestamp</th>
            </tr>
          </thead>

          <tbody>
            { historical.map(history => (
            <tr key={history.timestamp}>
                <th>{history.price}</th>
                <th>{history.assetSymbol}</th>
                <th>{history.timestamp}</th>

            </tr>
            ))}
          </tbody>
        </Table>
    )
}
export default History
// axios.post(url + "/pricing/historical", payload, header )
//       .then(res => { console.log(res); 
//         console.log(res.data.firstName)
//         sessionStorage.setItem('username', res.data.firstName)
//         sessionStorage.setItem('auth', true)
//         sessionStorage.setItem('custID', res.data.custID)
//         this.setState({
//           loggedIn: true,
//         })
//         this.props.setUser(payload.username)
//         this.props.setAuth(true)
//         this.props.startTimer()

//         if(this.state.isChecked) {
//           localStorage.setItem('username', username);
//           localStorage.setItem('password', password);
//         } else {
//           localStorage.clear();
//         }
        
//       })