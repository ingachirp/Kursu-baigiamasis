import React from 'react';
import './App.css';
import Form from './components/form';
import Info from './components/info';


export default function App() {
  return (
    <div className='app'>
      <Info />
      <Form />
    </div>
  );
}

