import { atom } from 'recoil'
import axios from 'axios'
// import jwtDecode from "jwt-decode";

export const formValuesState = atom({
  key: 'formValuesState',
  default: {
    name: "",
    email: "",
    password: "",
  }
})

const userAuthDefault = {
  isAuthenticated: false,
  user: null
}

// on page load
// try to get user token and details from localStorage
// const token = localStorage.TECHTREK3AuthToken
// if (token && token !== 'undefined' && token !== '') {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     localStorage.removeItem('TECHTREK3AuthToken');
//     delete axios.defaults.headers.common['Authorization'];
//     window.location.href = '/';
//   } else {
//     try {
//       axios.defaults.headers.common['Authorization'] = token;
//       const { data } = async () => await getUserData(formValues)
//       if (data) {
//         userAuthDefault.isAuthenticated = true
//         userAuthDefault.user = data
//       }
//     } catch (error) {
//       // setNotification({
//       //   message: error.message,
//       //   isVisible: true
//       // })
//       console.error(error)
//     }
//   }
// }

// auth
export const userAuth = atom({
  key: 'userAuth',
  default: userAuthDefault
})


export const login = userData => {
  
  const reqBody = {
    email: userData.email,
    password: userData.password
  }
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  return axios
    .post('/login', {headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }}, reqBody)
    .then(res => {
      // setAuthorizationHeader(res.data.token)
      // return getUserData()

    })
    .catch(err => {
      console.error(err)
    });
}

// logout remove localStorage
// export const logoutUser = () => {
//   localStorage.removeItem('TECHTREK3AuthToken');
//   delete axios.defaults.headers.common['Authorization'];
//   // localStorage.removeItem('user')
// }


// login set localStorage
// export const setAuthorizationHeader = token => {
//   const AuthToken = `Bearer ${token}`;
//   localStorage.setItem('TECHTREK3AuthToken', AuthToken)
//   axios.defaults.headers.common['Authorization'] = AuthToken;
// }
