import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Assortment from './pages/assortment/Assortment';
import AuthPage from './pages/Auth/AuthPage';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
function App() {
  const routes = useRoutes()
  return (
    <div className="app">
       <BrowserRouter>
        <NavBar/>
        { routes }
       </BrowserRouter>
    </div>
  );
}

export default App;
