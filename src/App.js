import './App.css';
import Header from './common/header/Header';
import About from './components/about/About';
import Cta from './components/cta/Cta';
import Float from './components/float/Float';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Tips from './components/tips/Tips';

function App() {
  return (
    <div className="App">
      <Header />
      <Float />
      <About />
      <Services />
      <Team />
      <Tips />
      <Cta />
    </div>
  );
}

export default App;
