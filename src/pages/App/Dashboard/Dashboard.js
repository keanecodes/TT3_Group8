import React from 'react';
import { useRecoilValue } from 'recoil'
import Container from "react-bootstrap/Container"
import { userAuth } from 'recoil/users'


const Dashboard = () => {
  const auth = useRecoilValue(userAuth)
  console.log(auth);
  
  return(
    <Container className="d-flex flex-column text-center">

        <h1>Welcome {auth.user?.firstName} {auth.user?.lastName}</h1> 

        <h2 className="text-center">  What do you want to do today?</h2>
        <br />
        <br />

            
    </Container>
)
}

export default Dashboard;
