import { useState } from 'react'

const CurrentWallet = () => {

    const getCurrentWallet = async () => {
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
        {
            method: "POST",
            headers:{
                'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP',
            },
            body: JSON.stringify({
                'accountKey': 'cDTeVIWCMlJm7Uo 4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
            })
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
