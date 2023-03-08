import logo from './logo.svg';
import './App.css';
import SimpleCounterComponent from './SimpleCounterComponent';
import PureCoutnerComponent from './components/PureCoutnerComponent';
function App() {
  return (
    <div className="App">
      <SimpleCounterComponent/>
      <PureCoutnerComponent/>
    </div>
  );
}

export default App;
