import axios from 'axios'
import React, {useState} from 'react'
import './balance.css'
export default function WalletBalance() {

    const[assetBalance, setAssetBalance] = useState ("");
    const[cashBalance, setCashBalance] = useState("");

    const fetchBal = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
            accountKey: "5e12aec7-1447-46a2-b1f6-b588514e4123"
        }, 
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            // "Access-Control-Allow-Origin": "*",
            "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP"}})
        .then((response) => {
            console.log(response.data);
            setAssetBalance(response.data.assetBalance);
            setCashBalance(response.data.cashBalance);
        }).catch((error) => {
            // windows.alert(error);
            console.log(error);
        })
    };

    
    return (
        <div>
            <div>
                <div className="Viewwallet">
                    Asset Balance: {assetBalance}
                </div>
                <div className="Viewwallet">
                    Cash Balance: {cashBalance}
                </div>
                <div>
                    <button onClick= {fetchBal}>Fetch Balance</button>
                </div>      
            </div>
        </div>
    )
}