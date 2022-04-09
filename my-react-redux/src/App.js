import './App.css';
import React from 'react';
import { Profile } from './components'
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      
      <Profile />
      <LoginForm />

    </div>
  );
}

export default App;
