import Home from "./pages/home";
import OnBoarding from "./pages/onBoarding";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken =  cookies.AuthToken
  return <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>}/> 
    {authToken && <Route path="/dashboard" element = {<Dashboard/>}/>} 
    {authToken && <Route path="/onboarding" element = {<OnBoarding/>}/>} 
  </Routes>
  </BrowserRouter>;
};
 
export default App;
