import axios from "axios";

API_KEY = 'AIzaSyCzH1lv19e_pL3_nEGPW74i_I8gmZCVCng'

async function authenticate(mode, email, password){
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  })
  //console.log(response.data)
  const token = response.data.idToken
  return token
}

export  function createUser(email, password){
  return authenticate('signUp', email, password)
}

export  function login(email, password){
  return authenticate('signInWithPassword', email, password)
}