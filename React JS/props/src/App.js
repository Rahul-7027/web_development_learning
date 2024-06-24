import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card title={"Title"} des={"Description"}/>
      <Footer/>
    </div>
  );
}

export default App;
