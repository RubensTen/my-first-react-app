import React, { Component } from 'react';
import styles from './App.scss';
import Header from './shared/header/header';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
