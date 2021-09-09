import {useState,useEffect} from 'react'

export const UseAuth = () =>{
  const [token, setToken] = useState(null)
  const [userId,setUserId] = useState(null)

  const Login = (jwtToken,id) =>{
      setToken(jwtToken)
      setUserId(id)
      localStorage.setItem('userData', JSON.stringify({userId:id, token: jwtToken}))
  }

  const Logout = () =>{
    setToken(null)
    setUserId(null)
    localStorage.removeItem('userData')
  }
}

