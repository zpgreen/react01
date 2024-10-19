import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Wrapper>
<<<<<<< HEAD
        <Hello name="chul" firstNm="KKang" color="red" isSpeacial={true} />
=======
        <Hello name="In Chul" firstNm="Kang" color="red" isSpeacial={true} />
>>>>>>> d113f3f (Kang)
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
