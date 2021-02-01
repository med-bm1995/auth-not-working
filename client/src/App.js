import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import AppNavbar from './components/AppNavBar'
import {useEffect,} from 'react'
import {useDispatch} from 'react-redux'
import {getAuthUser} from './js/actions/authActions'
import Dashboard from "./components/page/Dashboard"
function App() {
const dispatch = useDispatch()
const getUser=()=>dispatch(getAuthUser())

  useEffect(() => {
   getUser()
  }, [])
  return (
    <BrowserRouter>
    <AppNavbar/> 
    <Switch>
      <Route exact path='/' render={()=><h1>home</h1>} />
      <Route  path='/dashboard' render={(props) => <Dashboard {...props} />} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
