// import React from 'react';
// import Button from '@material-ui/core/Button';
// import { useState } from 'react'
// // import Button from '@material-ui/core/Button';
// import Table from "react-bootstrap/Table"

// const UserDetails = () => {
//     const getUserDetails = async () => {
//         const res = await fetch("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
//         {
//             method: "POST",
//             headers:{
//                 'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
//             } 
//             Username: 'Group8',
//             Password: 'cDTeVIWCMlJm7Uo'
//         }
//         )
//         const data = res.json()
//         //console.log(data)
//         return data
//     }


//     return (

//         <Table responsive striped bordered hover size="sm">
//             <thead>
//             <tr>
//                 <th>Phone Num</th>
//                 <th>Last Name</th>
//                 <th>Username</th>
//                 <th>Address</th>
//                 <th>Email</th>
//                 <th>First Name</th>
//                 <th>Nric</th>
//             </tr>
//             </thead>

//             {/* <tbody>
//             { transactions.map(transaction => (
//             <tr key={transaction.transactionId}>
//                 <th>{transaction.transactionId}</th>
//                 <th>{transaction.orderType}</th>
//                 <th>{transaction.timestamp}</th>
//                 <th>{transaction.assetSymbol}</th>
//                 <th>{transaction.assetAmount}</th>
//                 <th>${transaction.assetPrice}</th>
//                 <th>${transaction.cashAmount}</th>
//             </tr>
//             ))}
//             </tbody> */}
//         </Table>
//     )
// }
//             <p>{getUserDetails()}</p>
//         // </div>
    



// export default UserDetails;