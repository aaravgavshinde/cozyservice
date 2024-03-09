import './App.css';
import Services from './Components/Services';
import HERO from './Components/HERO';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HERO />
      <Services />
    </div>
  );
}

export default App;
