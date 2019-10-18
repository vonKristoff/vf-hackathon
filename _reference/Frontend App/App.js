import React from 'react';
import 'firebase/firestore';
import { useFirestoreDoc, useFirebaseApp, SuspenseWithPerf } from 'reactfire';

import './App.css';

function Tester() {
  const firebaseApp = useFirebaseApp();
  const db = firebaseApp
    .firestore()
    .collection('test')
  
  db.get()
    .then((snapshot) => snapshot.forEach(logData))
    .catch(console.log)  

  const specific = db.doc('JGNYoSZLMTkJ34bI0461');
  // subscribe to the doc. just one line!
  const docRef = useFirestoreDoc(specific);
  // get the value from the doc
  const name = docRef.data().name;

  return <p>Hi my name is {name}</p>;
}

function App() {
  return (    
    <div className="App">
      <h1>Firebase Tester</h1>
      <SuspenseWithPerf fallback={'loading names...'} traceId={'load-name-status'}>
        <Tester />
      </SuspenseWithPerf>
    </div>
  );
}

export default App;

function logData(doc) {
  console.log(doc.id, " => ", doc.data())
}
