<<<<<<< HEAD
import Restaurants from './component/Restaurants';

function App() {
  return (
    <div>
=======
import './App.css';
import Insertform from './component/Insertform';
import Restaurants from './component/Restaurants'

function App() {
  return (
    <div className="App">
>>>>>>> 5e99f70cb18eeb9c419014444a695e719787dedd
      <Restaurants dbinfo={ {
        botable : 'lunchSelect',
        crud : 'select',
        mapper : 'lunchSQL',
        mapperid : 'lunchList'
        }}></Restaurants>
<<<<<<< HEAD
=======
      <Insertform></Insertform>
>>>>>>> 5e99f70cb18eeb9c419014444a695e719787dedd
    </div>
  );
}

export default App;
