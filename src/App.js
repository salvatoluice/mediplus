import './App.css';
import Header from './common/header/Header';
import About from './components/about/About';
import Float from './components/float/Float';

function App() {
  return (
    <div className="App">
      <Header />
      <Float />
      <About />
    </div>
  );
}

export default App;
