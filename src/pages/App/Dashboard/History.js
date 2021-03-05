import React, {useEffect, useState} from 'react';
import axios from 'axios'

export default function History() {

    const [history, setHistory] = useState("")

    const fetchHistory = () => {
        axios.post('http://localhost/8080/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical', {},
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "X-Api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP"}})
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            // windows.alert(error);
            console.log(error);
        })
    };



    return (
        <div>
            History Page
            <button onClick ={fetchHistory}>View History</button>
        </div>
    )
}
