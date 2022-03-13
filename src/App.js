import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Amplify, {Predictions} from 'aws-amplify';
import {AmazonAIPredictionsProvider} from '@aws-amplify/predictions'
import Navbar from "./components/Navbar";
import TextIdentification from "./components/TextIdentification";
import TextTranslation from "./components/TextTranslation";
import TextToSpeech from "./components/TextToSpeech";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LabelsIdentification from "./components/LabelsIdentification";

Amplify.addPluggable(new AmazonAIPredictionsProvider())


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    {/*<Route path='/' exact component={Home} />*/}
                    <Route path='/labels' element={<LabelsIdentification/>} />
                    <Route path='/text' element={<TextIdentification/>} />
                    <Route path='/translate' element={<TextTranslation/>} />
                    <Route path='/tts' element={<TextToSpeech/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
