import React from 'react'
import { useState, useEffect } from 'react'

const CurrentPrice = () => {
    
    const [currentData, setCurrentData] = useState({})

    const getCurrentPrice = async () => {
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
        {
            method: "POST",
            headers:{
                'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
            }
        }
        )
        const data = await res.json()
        const date = new Date(data['timestamp']*1000)
        const newobject = {
            assetSymbol: data['assetSymbol'],
            currentPrice: data['price'],
            currentTime: date
        }
        setCurrentData(newobject);
        // setAssetSymbol(data['assetSymbol'])
        // console.log(data['price'])
        // setCurrentPrice(data['price']);
        // setCurrentTime(date);
    }

    useEffect(() =>{
        getCurrentPrice();
        setInterval(getCurrentPrice, 5000);
    },
    [])

    return (
        <div>
            <h3>Current price information (will refresh perodically)</h3>
            {Object.keys(currentData).length === 0 ? <p>Not loaded yet; press button below</p> :
            <p>{"The current for " + currentData['assetSymbol'] + " price is " + currentData['currentPrice'] + " as of " + currentData['currentTime'] }</p>}    

        </div>
    )
}

export default CurrentPrice