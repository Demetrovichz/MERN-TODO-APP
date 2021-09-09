import react from 'react';
import { Switch,Route,Redirect} from 'react-router';
import AuthPage from './pages/Auth/AuthPage';
import MainPage from './pages/MainPage/MainPage';

export const useRoutes = (isLogin) =>{
    if(isLogin) return (
      <Switch>
        <Route path="/" exact component = {MainPage} />
        <Redirect to='/' />
      </Switch>
    )
   return <Switch>
    <Route path="/login " exact component = {AuthPage} />
    <Redirect to='/' />
  </Switch>
}