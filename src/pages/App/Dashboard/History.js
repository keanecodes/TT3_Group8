import React, {useEffect, useState} from 'react';
import axios from 'axios'

export default function History() {

    const [data, setData] = useState("")

    useEffect(() => {
        axios.post(
            'http://localhost:8080/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical',
            {
                "x-api-key" : "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP"
            }
        ).then((err,response) => {
            if(err) {
                setData("Error!")
            } if (response) {
                console.log(response)
                setData(response)
        
            }
        })
        
    })

    return (
        <div>
            History Page
            {data}
        </div>
    )
}
