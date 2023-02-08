import logo from './logo.svg';
import './App.css';
import Room from './roomComponent.js'
import Room2 from './roomComponent2.js'
import Room3 from './roomComponent3.js'

function App() {
  return (
    <div className="App">
      <h1>Miniproject</h1>
      <Room className="box"></Room>
      <Room2 className="box"></Room2>
      <Room3 className="box"></Room3>
    </div>
  );
}

export default App;
