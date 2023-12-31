import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { NoteState } from './context/notes/NoteState';
import Navbar from './components/Navbar';
import { Home1 } from './components/Home1';
import { About1 } from './components/About1';
import Login from './components/Login';
import SignUP from './components/SignUP';
import AlertSate from './context/alerts/AlertSate';
import Alert from './components/Alert';
import { useState } from 'react';
import NoteDetail from './components/NoteDetail';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <AlertSate>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert} />

            <div className='container'>
              <Routes>
                <Route path="/" element={<Home1 showAlert={showAlert} />} />
                <Route path="/about" element={<About1 />} />
                <Route path="/login" element={<Login showAlert={showAlert} />} />
                <Route path="/signup" element={<SignUP showAlert={showAlert} />} />
                <Route path="/blogs/:id" element={<NoteDetail />} />
              </Routes>
            </div>
          </Router>
        </NoteState>
      </AlertSate>
    </>
  );
}

export default App;
