import './App.css';
import Listing from './Listing/Listing'
import items from './data'




function App() {
 
  return (
    <div className="App">      
          <Listing  items={items} />      
    </div>
  );
}

export default App;
