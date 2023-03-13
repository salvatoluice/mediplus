import './App.css';
import Header from './common/header/Header';
import About from './components/about/About';
import Float from './components/float/Float';
import Services from './components/services/Services';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Float />
      <About />
      <Services />
      <Team />
    </div>
  );
}

export default App;
