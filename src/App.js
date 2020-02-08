import React  from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/store/store';
import Routes from './routes/Routes';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;


