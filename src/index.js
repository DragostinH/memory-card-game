import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './component/Footer';
import Header from './component/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className=''>
    <Header />
    <App />
    <Footer />
  </main>
);

