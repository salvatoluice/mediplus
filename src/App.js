import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentForm from './components/appointment/AppointmentForm';
import Pages from './components/Pages';
import Doctors from './pages/doctors/Doctors';
// import Dashboard from './pages/login/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Reset from './pages/login/Reset';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Pages />} />
        <Route path='/appointment' element={<AppointmentForm />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
