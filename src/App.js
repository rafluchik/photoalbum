import dog1 from './dog1.jpeg';
import dog2 from './dog2.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Puppies</h1>
        <img src={dog1} className="App-logo" alt="logo" />
        <img src={dog2} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
