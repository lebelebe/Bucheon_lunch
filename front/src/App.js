import Restaurants from './component/Restaurants';

function App() {
  return (
    <div>
      <Restaurants dbinfo={ {
        botable : 'lunchSelect',
        crud : 'select',
        mapper : 'lunchSQL',
        mapperid : 'lunchList'
        }}></Restaurants>
    </div>
  );
}

export default App;
