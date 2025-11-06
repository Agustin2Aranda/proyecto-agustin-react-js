import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TraerCollection from './components/TraerCollection.jsx'
import './index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzkgc9sIfX4MFsApoeX0YSme0VO4t1vGY",
  authDomain: "tienda-de-relojes22.firebaseapp.com",
  projectId: "tienda-de-relojes22",
  storageBucket: "tienda-de-relojes22.firebasestorage.app",
  messagingSenderId: "488223878213",
  appId: "1:488223878213:web:42cd5ebe1f23227968072c"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <TraerCollection />
  </>
)
