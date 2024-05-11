import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCgK2CUOTJZdvW0E6c5Pzik1hH2wXp4Xfg",
  authDomain: "newdb-e69d4.firebaseapp.com",
  databaseURL: "https://newdb-e69d4-default-rtdb.firebaseio.com",
  projectId: "newdb-e69d4",
  storageBucket: "newdb-e69d4.appspot.com",
  messagingSenderId: "715204258313",
  appId: "1:715204258313:web:92ab81de18df225cede6d8",
  measurementId: "G-LSCX90GHRN"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);