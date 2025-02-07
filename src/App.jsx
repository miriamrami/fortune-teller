import './App.css';
import Home from './components/Home';
import Fortune from './components/Fortune';
import React, {useState} from 'react';

function App() {
  const [showFortune, setShowFortune] = useState(false);

  const handleAccept = () => {
    setShowFortune(true);
  };

  const backHome =  () => {
    setShowFortune(false);
  }

  return (
    <div className="app">
      {showFortune ? <Fortune backHome={backHome}/> : <Home onAccept={handleAccept} />}
    </div>
  );
}

export default App;
