import './App.css';
import Services from './Components/Services';
import HERO from './Components/HERO';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HERO />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
