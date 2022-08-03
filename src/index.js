import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import  App   from 'App';
import './index.css';
import store from './redux/store';
// import Action from './redux/actions';
import { Provider } from 'react-redux';

console.log(store);
// console.log(store.dispatch(Action));


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
       <React.StrictMode>
          <App />
        </React.StrictMode>
    </PersistGate>
   </Provider>
  
);