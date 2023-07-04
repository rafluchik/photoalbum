import dog1 from './dog1.jpeg';
import dog2 from './dog2.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Puppies</h1>
        <p>This is my example application for Jenkins project demo. Demonstarting GitHub-Jenkins-Nexus integration.</p>
        <img src={dog1} className="App-logo" alt="logo" />
        <img src={dog2} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
