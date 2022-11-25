import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BlankSpace from './Components/BlankSpace';
import { Chat } from './Components/Chat';
import Register from "./Components/Register";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <BlankSpace/>
    <Chat/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
