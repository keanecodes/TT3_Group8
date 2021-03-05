import { useState } from 'react'

const CurrentPrice = () => {
    // default to -1
    const [currentPrice, setCurrentPrice] = useState(-1);
    // this works put not sure how to pass the data out of function
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
        setCurrentPrice(data['price'])
    }

    return (
        <div>
            <p>{currentPrice}</p>
        </div>
    )
}

export default CurrentPrice