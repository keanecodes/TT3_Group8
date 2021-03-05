import { useState } from 'react'

const CurrentPrice = () => {
    
    const [assetSymbol, setAssetSymbol] = useState('');
    const [currentPrice, setCurrentPrice] = useState(-1);
    const [currentTime, setAssetSymbol] = useState('');


    const getCurrentPrice = async () => {
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
        {
            method: "POST",
            headers:{
                'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
            }
        }
        )
        const data = res.json()
        const date = new Date(data['timestamp']*1000)
        setAssetSymbol(data['assetSymbol'])
        setCurrentPrice(data['price']);
        setCurrentTime(date);
    }

    return (
        <div>
            <p>The price of {assetSymbol} is {currentPrice} as of {currentTime}</p>
        </div>
    )
}

export default CurrentPrice