import './App.css';
import Insertform from './component/Insertform';
import Restaurants from './component/Restaurants';
import Selectmenu from './component/Selectmenu';

function App() {
  return (
    <div className="App">
      <Restaurants dbinfo={ {
        botable : 'lunchSelect',
        crud : 'select',
        mapper : 'lunchSQL',
        mapperid : 'categoryList'
        }}></Restaurants>
      <Selectmenu dbinfo={ {
        botable : 'lunchSelect',
        crud : 'select',
        mapper : 'lunchSQL',
        mapperid : 'lunchList'
        }}></Selectmenu>
      <Insertform></Insertform>
    </div>
  );
}

export default App;
