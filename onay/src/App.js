
import './App.css';
import Courses from './components/Courses';
import Description from './components/Description';
import Home from './components/Home';
import Registration from './components/Registration';
import Reviews from './components/Reviews';
import Zaeb from './components/Zaeb';

function App() {
  return (
    <div className='desktop'>
      <div className='div'>
        <Home/>
        <Description/>
        <Courses/>
        <Reviews/>
        <Registration/>
        <Zaeb/>
      </div>
    </div>
  );
}

export default App;
