import React, {useState} from 'react'
import './AuthPage.scss'
import axios from 'axios'
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom'
export default function AuthPage() {
  const [form,setForm] = useState({
    email: '',
    password: ''
  })

  const ChangeHandler = (event) =>{
    setForm({...form,[event.target.name]: event.target.value})
    console.log(form)
  }
  const LoginHandler = async() =>{
    try {
      await axios.post('/api/auth/login', {...form}, {headers: {'Content-Type': 'application/json'}})
    }catch(e) {
      console.log(e);
    }
  }

  const registerHandler = async() =>{
    try{
    await axios.post('/api/auth/registration', {...form},{
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log(response))

    }catch(e){

    }
}
  return (
    <BrowserRouter>
        <Switch>
        <React.Fragment>
        <div className="container">
          <div className="auth-page">
          <Route path="/login">
          <h3 >Авторизация</h3>
          <form className="form form-login" onSubmit={e => e.preventDefault()}>
            <div className="row">
            <div className="input-field col s12 ">
            <input onChange={ChangeHandler} type="email"  name="email" className="validate"/>
            <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
            <input onChange={ChangeHandler} type="password"  name="password" className="validate"/>
            <label htmlFor="password">password</label>
            </div>
            <div className="row">
            <button onClick={LoginHandler} className="wawes-effect wawes-light btn btn teal lighten-5">Войти</button>
            <Link to="/register" className="wawes-effect wawes-light btn btn grey darken-3">Зарегистрироваться</Link>
          </div>
            </div>
          </form>
          </Route>

        <Route path="/register">
        <h3 >Регистрация</h3>
        <form className="form form-login" onSubmit={e => e.preventDefault()}>
          <div className="row">
          <div className="input-field col s12 ">
          <input onChange={ChangeHandler} type="email"  name="email" className="validate"/>
          <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
          <input onChange={ChangeHandler} type="password"  name="password" className="validate"/>
          <label htmlFor="password">password</label>
          </div>
          <div className="row">
          <button onClick={registerHandler} className="wawes-effect wawes-light btn btn teal lighten-5">Зарегисритроваться</button>
          <Link to="/login" className="wawes-effect wawes-light btn btn grey darken-3">Уже есть аккаунт ?</Link>
        </div>
          </div>
        </form>
        </Route>
        </div>
        </div>
      </React.Fragment>
        </Switch>
    </BrowserRouter>
  )
}
