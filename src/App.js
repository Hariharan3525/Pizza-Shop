import './App.css';
import AppBar from './Components/AppBar';
import Banner from './Components/Banner';
import Comments from './Components/Comments';
import Menu from './Components/Menu';
import PickoftheWeek from './Components/PickoftheWeek';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Banner/>
      <Menu/>
      <PickoftheWeek/>
      <Comments/>
    </div>
  );
}

export default App;
