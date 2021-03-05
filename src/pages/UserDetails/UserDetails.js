import React from 'react';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
// import Button from '@material-ui/core/Button';


const UserDetails = () => {
    const getUserDetails = async () => {
        const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
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
}

    return (
        <div>
            <p>{getUserDetails()}</p>
        </div>
    )
}


export default UserDetails;