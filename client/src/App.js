import React, { useEffect } from 'react';
import AppNavBar from './components/AppNavBar';
import JokesList from './components/JokesList';
import JokeModal from './components/JokeModal';
import { Container } from 'reactstrap';


import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <Provider store={store}>
      
        <div className="App">
          <AppNavBar/>
            <Container>
              <JokeModal/>
              <JokesList/>
            </Container>
        </div>
      

    </Provider>
  );
}

export default App;
