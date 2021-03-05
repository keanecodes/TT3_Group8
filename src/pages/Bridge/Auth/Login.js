import React from 'react'
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as BackDrop1 } from "assets/undraw_to_the_moon_v1mv.svg";
import { ReactComponent as BackDrop2 } from "assets/dbs-star.svg";
import { ReactComponent as DBSLogo } from "assets/dbs_logo.svg";

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { formValuesState, userAuth, login } from 'recoil/users'

export default function Login({history}) {
  // const formValues = useRecoilValue(formValuesState)
  const setUserAuth = useSetRecoilState(userAuth)

  const handleSubmit = async values => {
    console.log('Received values of form: ', values);
    const data = await login(values);

    console.log(data)
    if (data) {
      // state
      // setUserAuth({
      //   isAuthenticated: true,
      //   user: data
      // })

      // redirect to dashboard
      // history.push(routes.user.dashboard)
      // history.push('/app/dashboard');
    }
  };
  
  return (
    <>
        <div className="Auth">
          <DBSLogo className="auth-decor auth-backdrop-logo" />
          <BackDrop1 className="auth-decor auth-backdrop1" />
          <BackDrop2 className="auth-decor auth-backdrop2" />
          <div className="login-box">
            <Form onFinish={handleSubmit} className="login-form">
              <div className="login-fields-wrapper">
                <Logo className="logo-icon" />
                <div className="fields-box">
                  <Form.Item
                    name="username"
                    rules={[
                      { required: true, message: "Please input your username" },
                      // { type: 'email', message: "The input is not valid E-mail" }
                      ]}>
                    <Input prefix={<UserOutlined style={{ color: "var(--theme-color-primary)" }}/>} placeholder="Username"/>
                  </Form.Item>
                  <Form.Item
                    name="password"
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
                <Button type="primary" htmlType="submit">
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
