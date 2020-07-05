import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Firebase from './utils/firebase';
import FirebaseContext from './utils/FirebaseContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { store, rrfProps } from './store/storeConfig'



ReactDOM.render(
 <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
  </Provider>,

  </FirebaseContext.Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


