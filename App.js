import './App.css';
import  Day5 from './Day_5';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["1","2","3","4"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;