import React, {useState} from 'react'
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as BackDrop1 } from "assets/undraw_to_the_moon_v1mv.svg";
import { ReactComponent as BackDrop2 } from "assets/dbs-star.svg";
import { ReactComponent as DBSLogo } from "assets/dbs_logo.svg";
import axios from 'axios'
import {useHistory} from "react-router-dom"

/* import { useSetRecoilState } from 'recoil';
import { userAuth, login } from 'recoil/users' */


export default function Login() {
  // const formValues = useRecoilValue(formValuesState)
  
  //const setUserAuth = useSetRecoilState(userAuth)

  //const handleSubmit = async values => {
     /* console.log('Received values of form: ', values);
    const data = await login(values);

    console.log(data)
    if (data) {
      // state
      setUserAuth({
        isAuthenticated: true,
        user: data
      })

      // redirect to dashboard
      history.push('/app/dashboard');
    }
  ; */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const jwt = require("jsonwebtoken");

  const history = useHistory();

  const toggleLogin = () => {
    
    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
            username: username,
            password: password
        }, 
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            // "Access-Control-Allow-Origin": "*",
            "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP"}})
        .then((response) => {
            console.log(response.data);
            const user = response.data;
            const token = jwt.sign({user}, "jwtSecret", {
              expiresIn: 60 * 60,
            })
            sessionStorage.setItem('token', token);
             // redirect to dashboard
            history.push('/app/dashboard')
        }).catch((error) => {
            // windows.alert(error);
            console.log(error);
        })
  
}
   
  return (
    <>
        <div className="Auth">
          <DBSLogo className="auth-decor auth-backdrop-logo" />
          <BackDrop1 className="auth-decor auth-backdrop1" />
          <BackDrop2 className="auth-decor auth-backdrop2" />
          <div className="login-box">
            <Form /* onFinish={handleSubmit} */ className="login-form">
              <div className="login-fields-wrapper">
                <Logo className="logo-icon" />
                <div className="fields-box">
                  <Form.Item
                    name="username"
                    onChange = {(e)=> {
                      setUsername(e.target.value);
                    }}
                    rules={[
                      { required: true, message: "Please input your username" },
                      // { type: 'email', message: "The input is not valid E-mail" }
                      ]}>
                    <Input prefix={<UserOutlined style={{ color: "var(--theme-color-primary)" }}/>} placeholder="Username"/>
                  </Form.Item>
                  <Form.Item
                    name="password"
                    onChange = {(e) => {
                      setPassword(e.target.value);
                    }}
                    rules={[{ required: true, message: "Please input your password" }]}>
                      <Input.Password
                        prefix={ <LockOutlined style={{ color: "var(--theme-color-primary)" }}/> }
                        type="password" placeholder="Password"
                      />
                  </Form.Item>

                  {/* <Button type="link" onClick={() => this.props.history.push('/user/forget')}>Forgot Password?</Button> */}
                </div>
                <br/><br/>
                {/* {errors.general ?
                  (<small style={{ color: "red"}}>
                    {errors.general}
                  </small>)
                  :
                  (<small style={{ color: "#BECFFF"}}>
                    Testing out? Try: <br /> user@mail.com | password
                  </small>)
                } */}
              </div>
              <div className="btns-box">
                {/* <Button onClick={() => this.props.history.push('/user/register')}>Sign Up</Button> */}
                {/* <Button type="primary" htmlType="submit" loading={loading}> */}
                <Button type="primary" onClick = {toggleLogin} htmlType="submit">
                  Login
                </Button>
              </div>
            </Form>

          </div>

          {/* <BackDrop3 className="auth-decor auth-backdrop3" />
          <BackDrop2 className="auth-decor auth-backdrop2" /> */}
        </div>
      </>
  )
}
