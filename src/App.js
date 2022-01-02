import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import CakeContainer from './component/cakeContainer';
import HooksCakeContaoiner from './component/hooksCakeContainer';
import IceCreamContainer from './component/iceCreamContainer';
import UserContainer from './component/userContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
    {/* <CakeContainer/>
    <HooksCakeContaoiner/>
    <IceCreamContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
