import React from 'react'
import { useState } from 'react'

const CurrentPrice = () => {
    
    const [currentData, setCurrentData] = useState({
        assetSymbol: '',
        currentPrice: -1,
        currentTime: ''
    })

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

    return (
        <div>
            <p>{"The current for " + currentData['assetSymbol'] + " price is " + currentData['currentPrice'] + " as of " + currentData['currentTime'] }</p>
            <button onClick = {()=>{getCurrentPrice(    )}}>Update price</button>
        </div>
    )
}

export default CurrentPrice