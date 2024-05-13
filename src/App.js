import './App.css';
import {Route,Routes} from 'react-router-dom';
import Dashboard from '../src/components/DashBoard/Dashboard.jsx';
import Header from './components/Header.jsx';
import SubmitForm from './components/SubmitProblem/SubmitForm.jsx';
import Login from './components/Login&signup/Login.jsx';
import ProblemDisplay from './components/Problem_Display/ProblemDisplay.jsx';
import Register from './components/Register Page/Register.jsx';
import About from './components/About Page/About.jsx';

function App() {
  return (
    <div>
        <Header/> 

        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/form" element={ <SubmitForm/>}/>   
            <Route path="/problem" element={<ProblemDisplay/> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

    </div>
  );
}

export default App;
