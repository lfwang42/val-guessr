import logo from './valorant logo.png';
import './App.css';
import Footer from './footer.js'

function App() {
  return (
    /* "_id": "new9",
    "name": "pic49.jpg",
    "lat": "1056",
    "lng": "600",
    "location": "Teyvat"
}*/
//images stored locally (?), but have id, names, and store their lat/longitude locally
    <div className="App">
      <header className="App-header">
        <img src={logo} className="main-logo" alt="logo" />
        <h2> ValGuessr</h2>
      </header>
      <Footer />
    </div>
  );
}

export default App;
