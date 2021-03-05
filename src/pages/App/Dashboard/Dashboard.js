import React from 'react';
import { useRecoilValue } from 'recoil'
import Container from "react-bootstrap/Container"
import { userAuth } from 'recoil/users'
import jwt_decode from "jwt-decode"


const Dashboard = () => {
  const auth = useRecoilValue(userAuth)
  console.log(auth);
  var token = sessionStorage.getItem("token");
  var decoded = jwt_decode(token);
  
  return(
    <Container className="d-flex flex-column text-center">

        <h1>Welcome {decoded.user.firstName + " " + decoded.user.lastName}</h1>
        <h2 className="text-center">  What do you want to do today?</h2>
        <br />
        <br />

            
    </Container>
)
}

export default Dashboard;
