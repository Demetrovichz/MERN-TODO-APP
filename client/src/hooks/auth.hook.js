import {useState,useEffect,useCallback} from 'react'

export const UseAuth = () =>{
  const [token, setToken] = useState(null)
  const [userId,setUserId] = useState(null)
  const [isReady, setIsReady] = useState(false)


  const Login =  useCallback((jwtToken,id) =>{
      setToken(jwtToken)
      setUserId(id)
      localStorage.setItem('userData', JSON.stringify({userId:id, token: jwtToken}))
  })

  const Logout = () =>{
    setToken(null)
    setUserId(null)
    localStorage.removeItem('userData')
  }

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('userData'))
    if(data && data.token){
      Login(data.token, data.userId)
    } 
    setIsReady(true)
  },[Login])

  return{Login, Logout, token,userId,isReady}
}

