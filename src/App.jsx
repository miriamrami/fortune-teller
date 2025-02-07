import './App.css';
import Home from './components/Home';
import Fortune from './components/Fortune';
import React, {useState} from 'react';

function App() {
  const [showFortune, setShowFortune] = useState(false);

  const handleAccept = () => {
    setShowFortune(true);
  };

  return (
    <div className="app">
      {showFortune ? <Fortune /> : <Home onAccept={handleAccept} />}
    </div>
  );
}

export default App;
