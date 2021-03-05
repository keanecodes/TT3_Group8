import React, {useState} from 'react';
import Container from "react-bootstrap/Container"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key' : '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
            },
            body: JSON.stringify({
                username, 
                password
            })
        })
            .then(data => {
              const test = data.json()
              console.log(test)
            })
            .catch((error) => {
                console.log(error)
                setLoginError(true)
                alert('Invalid address/credentials entered.')
            })
    }
    
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={submit}>
            <h1>DBS SEED</h1>
            <br />
            <div>
                <input type="text"
                autoComplete="off"
                id = "username"
                name = "username"
                placeholder = "Username"
                onChange = {e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input type="password"
                autoComplete="off"
                id = "password"
                name = "password"
                placeholder = "Password"
                onChange = {e => setPassword(e.target.value)}
                />
            </div>
            {loginError && <div id = "errorMessage" className = "generic-error">
                <p> The credentials you have entered is not valid.</p>
            </div>}
            <button type="submit">Log In</button>
        </form>
        </Container>
    )
}

export default Login


// import React, {useState} from 'react';
// import { Form, Input, Button } from "antd";
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import "./Login.css";
// import { ReactComponent as Logo } from "assets/logo.svg";
// import { ReactComponent as BackDrop1 } from "assets/undraw_to_the_moon_v1mv.svg";
// import { ReactComponent as BackDrop2 } from "assets/dbs-star.svg";
// import { ReactComponent as DBSLogo } from "assets/dbs_logo.svg";

//  const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginError, setLoginError] = useState(false);

//   const handleSubmit = async (values) => {
//     console.log('Received values of form: ', values);
//     await fetch('http://localhost:8080/https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//           'x-api-key' : 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
//       },
//       body: JSON.stringify({
//           username, 
//           password
//       })
//   })
//       .then(data => {
//         data.json()
//         console.log(data)
//       })
//       .catch((error) => {
//           console.log(error)
//           setLoginError(true)
//           alert('Invalid address/credentials entered.')
//       })
//   };
  
//   return (
//     <>
//         <div className="Auth">
//           <DBSLogo className=".auth-decor auth-backdrop-logo" />
//           <BackDrop1 className=".auth-decor auth-backdrop1" />
//           <BackDrop2 className=".auth-decor auth-backdrop2" />
//           <div className="login-box">
//             <Form onFinish={handleSubmit} className="login-form">
//               <div className="login-fields-wrapper">
//                 <Logo className="logo-icon" />
//                 <div className="fields-box">
//                   <Form.Item
//                     name="email"
//                     rules={[
//                       { required: true, message: "Please input your username" },
//                       // { type: 'email', message: "The input is not valid E-mail" }
//                       ]}>
//                     <Input prefix={<UserOutlined style={{ color: "var(--theme-color-primary)" }}/>} placeholder="Username"/>
//                   </Form.Item>
//                   <Form.Item
//                     name="password"
//                     rules={[{ required: true, message: "Please input your password" }]}>
//                       <Input.Password
//                         prefix={ <LockOutlined style={{ color: "var(--theme-color-primary)" }}/> }
//                         type="password" placeholder="Password"
//                       />
//                   </Form.Item>

//                   {/* <Button type="link" onClick={() => this.props.history.push('/user/forget')}>Forgot Password?</Button> */}
//                 </div>
//                 <br/><br/>
//                 {/* {errors.general ?
//                   (<small style={{ color: "red"}}>
//                     {errors.general}
//                   </small>)
//                   :
//                   (<small style={{ color: "#BECFFF"}}>
//                     Testing out? Try: <br /> user@mail.com | password
//                   </small>)
//                 } */}
//               </div>
//               <div className="btns-box">
//                 {/* <Button onClick={() => this.props.history.push('/user/register')}>Sign Up</Button> */}
//                 {/* <Button type="primary" htmlType="submit" loading={loading}> */}
//                 <Button type="primary" htmlType="submit">
//                   Login
//                 </Button>
//               </div>
//             </Form>

//           </div>

//           {/* <BackDrop3 className="auth-decor auth-backdrop3" />
//           <BackDrop2 className="auth-decor auth-backdrop2" /> */}
//         </div>
//       </>
//   )
// }

// export default Login