import Home from "./pages/home";
import OnBoarding from "./pages/onBoarding";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>}/> 
    <Route path="/dashboard" element = {<Dashboard/>}/> 
    <Route path="/onboarding" element = {<OnBoarding/>}/> 
  </Routes>
  </BrowserRouter>;
};

export default App;
