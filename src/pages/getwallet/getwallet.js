import { useState } from 'react'

const CurrentWallet = () => {

    const getCurrentWallet = async () => {
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
        {
            method: "POST",
            headers:{
                'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP',
                'accountKey': '5e12aec7-1447-46a2-b1f6-b588514e4123'
            }
        }
        )
        const data = res.json()
        console.log(data)
    }

    return (
        <div>

        </div>
    )
}

export default CurrentWallet
