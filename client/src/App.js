import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Assortment from './pages/assortment/Assortment';
import AuthPage from './pages/Auth/AuthPage';
import {BrowserRouter} from 'react-router-dom'
import {AuthContext} from './context/AuthContext'
import {UseAuth} from './hooks/auth.hook'
import {useRoutes} from './routes'
function App() {
  const routes = useRoutes()
  const {Login, Logout, token, userId, isReady} = UseAuth()
  return (
    <AuthContext.Provider value = {{Login, Logout, token, userId, isReady}}>
    <div className="app">
       <BrowserRouter>
        <NavBar/>
        { routes }
       </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
