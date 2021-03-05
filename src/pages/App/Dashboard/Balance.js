import axios from 'axios'
import React, {useState,useEffect} from 'react'
import jwt_decode from "jwt-decode"

export default function WalletBalance() {

    const[assetBalance, setAssetBalance] = useState ("");
    const[cashBalance, setCashBalance] = useState("");
    const[accountKey, setAccountKey] = useState("");

    var token = sessionStorage.getItem("token");
    const decoded = jwt_decode(token);

    useEffect(()=>{
    setAccountKey(decoded.user.accountKey)
    },[decoded.user.accountKey])
  

    const fetchBal = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
            accountKey: accountKey
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
                <div>
                    Asset Balance: {assetBalance}
                </div>
                <div>
                    Cash Balance: {cashBalance}
                </div>
                <div>
                    <button onClick= {fetchBal}>Fetch Balance</button>
                </div>      
            </div>
        </div>
    )
}