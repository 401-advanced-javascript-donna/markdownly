import React from 'react';
import Document from '../containers/Document';
import Header from '../containers/Header';
import styles from './App.css';

export default function App() {
  return (
    <div>
      <h1 className={styles.App}>Markdown Editor</h1>
      <Header />
      <Document />
    </div>
  );
}
