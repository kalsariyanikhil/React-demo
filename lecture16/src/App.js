import { createContext } from 'react';
import './App.css';
import ComA from './Component/ComA';

const Context1 = createContext();

function App() {
  return (
    <div className="App">
      <Context1.Provider value="ABC">
        <ComA/>
      </Context1.Provider>
    </div>
  );
}
export {Context1}
export default App;
