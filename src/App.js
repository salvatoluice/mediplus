import './App.css';
import Header from './common/header/Header';
import About from './components/about/About';
import Float from './components/float/Float';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Float />
      <About />
      <Services />
    </div>
  );
}

export default App;
