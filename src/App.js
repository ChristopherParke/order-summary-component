import React from 'react';
import './App.css';
import Osc from './features/osc/Osc';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.background}>       
      <Osc />
    </div>
  );
}

export default App;
