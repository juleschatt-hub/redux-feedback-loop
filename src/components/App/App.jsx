
//React Imports
import { HashRouter as Router, Route } from 'react-router-dom';

//Compnent imports
import Understanding from '../Understanding/Understanding.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Thank from '../Thank/Thank.jsx';
import './App.css';

function App() {
  
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
          <Route exact path='/'>
            <Feeling />
          </Route>
          <Route path='/understanding'>
            <Understanding />
          </Route>
          <Route path='/supported'>
            <Supported />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/thank'>
            <Thank />
          </Route>
      </div>
    </Router>
  );
}

export default App;
