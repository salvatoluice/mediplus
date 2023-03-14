import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentForm from './components/appointment/AppointmentForm';
import Pages from './components/Pages';
import Doctors from './pages/doctors/Doctors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Pages />} />
        <Route exact path='/appointment' element={<AppointmentForm />} />
        <Route exact path='/doctors' element={<Doctors />} />
      </Routes>
    </div>
  );
}

export default App;
