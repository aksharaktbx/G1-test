import './App.css';
import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme you like
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css'; // Your global styles

import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import CustomCursor from './Component/Custom/CustomCursor';
import Help from './Component/Help/Help';
import AccordianSection from './Component/Help/AccordianSection';
import Faq from './Component/Help/Faq';
import TestLocation from './Component/Recources/TestLocation';
import DrivingTips from './Component/Recources/DrivingTips';
import LoginPage from './Component/Login/LoginPage';
import Premium from './Component/Primiumpage/Premium';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FreeTest from './Component/FreeTest/FreeTest';
import Premiumtest from './Component/PremumTest/Premiumtest';
import Testpage from './Component/NormalTest/Testpage';
import ExamPage from './Component/ExamPage/ExamPage';
import Dashboard from './Component/Admin/Dashboard';
import Result from './Component/Result/Result';


function App() {
  return (
    <Router>
      <CustomCursor />
      {/* <Dashboard/> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home/help" element={<Help/>} />
        <Route path='/home/help/premium' element={<AccordianSection/>}/>
        <Route path='/home/FQ&A' element={<Faq/>}/>
        <Route path='/home/Recources/Testlocation' element={<TestLocation/>}/>
        <Route path='/home/Recources/DrivingTips' element={<DrivingTips/>}/>
        <Route path='/auth' element={<LoginPage/>}/>
        <Route path='/Home/Premium/navigation' element={<Premium/>}/>
        <Route path='/home/g1-free-test' element={<FreeTest/>}/>
        <Route path='/home/gi-premium-test-series' element={<Premiumtest/>}/>
        <Route path='/home/who-can-g1-driver-drive-with/' element={<Testpage/>}/>
        <Route path='/home/text-series' element={<ExamPage/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </Router>
  );
}
export default App;
