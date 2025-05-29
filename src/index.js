import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Counter from './Counter';
import Hello from './Hello';
import './index.css';
import InputSample from './InputSample';
import reportWebVitals from './reportWebVitals';
import Wrapper from './Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Wrapper>
        <Hello name="chulchul" firstNm="Gang" color="black" isSpeacial={true} />
        <Counter />
        <InputSample></InputSample>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
