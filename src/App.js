import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/header/Header';
import About from './components/about/About';
import AppointmentForm from './components/appointment/AppointmentForm';
import Cta from './components/cta/Cta';
import Float from './components/float/Float';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Pages from './components/Pages';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Tips from './components/tips/Tips';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Pages />} />
        <Route exact path='/appointment' element={<AppointmentForm />} />
      </Routes>
    </div>
  );
}

export default App;
