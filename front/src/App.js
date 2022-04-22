import './App.css';
import Insertform from './component/Insertform';
import Restaurants from './component/Restaurants'

function App() {
  return (
    <div className="App">
      <Restaurants dbinfo={ {
        botable : 'lunchSelect',
        crud : 'select',
        mapper : 'lunchSQL',
        mapperid : 'lunchList'
        }}></Restaurants>
      <Insertform></Insertform>
    </div>
  );
}

export default App;
