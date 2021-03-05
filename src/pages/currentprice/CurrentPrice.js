import { useState } from 'react'

const CurrentPrice = () => {
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
        //console.log(data)
        return data
    }

    return (
        <div>
            <p>{getCurrentPrice()['price']}</p>
        </div>
    )
}

export default CurrentPrice