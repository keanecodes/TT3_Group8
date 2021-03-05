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
    username: userData.username,
    password: userData.password
  }
  
  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
    },
    body: reqBody
  }
  console.log(reqBody)

  return axios
    .post('/login', 
    {headers: {
      'Content-Type': 'application/json',
      'x-api-key': '4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
    }}, 
    {body: reqBody})
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
