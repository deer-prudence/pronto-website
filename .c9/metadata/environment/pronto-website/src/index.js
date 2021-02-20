{"filter":false,"title":"index.js","tooltip":"/pronto-website/src/index.js","undoManager":{"mark":24,"position":24,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":18},"action":"remove","lines":["import React from 'react';","import ReactDOM from 'react-dom';","import './index.css';","import App from './App';","import reportWebVitals from './reportWebVitals';","","ReactDOM.render(","  <React.StrictMode>","    <App />","  </React.StrictMode>,","  document.getElementById('root')",");","","// If you want to start measuring performance in your app, pass a function","// to log results (for example: reportWebVitals(console.log))","// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals","reportWebVitals();"],"id":2},{"start":{"row":0,"column":0},"end":{"row":10,"column":58},"action":"insert","lines":["import React from 'react';","import ReactDOM from 'react-dom';","","function App() {","  return (","    <button role=\"link\">","      Checkout","    </button>","  );","}","ReactDOM.render(<App />, document.getElementById('root'));"]}],[{"start":{"row":0,"column":0},"end":{"row":11,"column":0},"action":"remove","lines":["import React from 'react';","import ReactDOM from 'react-dom';","","function App() {","  return (","    <button role=\"link\">","      Checkout","    </button>","  );","}","ReactDOM.render(<App />, document.getElementById('root'));",""],"id":3},{"start":{"row":0,"column":0},"end":{"row":15,"column":58},"action":"insert","lines":["import React from 'react';","import ReactDOM from 'react-dom';","import { loadStripe } from '@stripe/stripe-js';","// Make sure to call `loadStripe` outside of a component’s render to avoid","// recreating the `Stripe` object on every render.","const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');","","function App() {","  return (","    <button role=\"link\">","      Checkout","    </button>","  );","}","","ReactDOM.render(<App />, document.getElementById('root'));"]}],[{"start":{"row":0,"column":0},"end":{"row":15,"column":58},"action":"remove","lines":["import React from 'react';","import ReactDOM from 'react-dom';","import { loadStripe } from '@stripe/stripe-js';","// Make sure to call `loadStripe` outside of a component’s render to avoid","// recreating the `Stripe` object on every render.","const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');","","function App() {","  return (","    <button role=\"link\">","      Checkout","    </button>","  );","}","","ReactDOM.render(<App />, document.getElementById('root'));"],"id":4},{"start":{"row":0,"column":0},"end":{"row":36,"column":58},"action":"insert","lines":["import React from 'react';","import ReactDOM from 'react-dom';","import { loadStripe } from '@stripe/stripe-js';","// Make sure to call `loadStripe` outside of a component’s render to avoid","// recreating the `Stripe` object on every render.","const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');","","function App() {","  const handleClick = async (event) => {","    // Get Stripe.js instance","    const stripe = await stripePromise;","","    // Call your backend to create the Checkout Session","    const response = await fetch('/create-checkout-session', { method: 'POST' });","","    const session = await response.json();","","    // When the customer clicks on the button, redirect them to Checkout.","    const result = await stripe.redirectToCheckout({","      sessionId: session.id,","    });","","    if (result.error) {","      // If `redirectToCheckout` fails due to a browser or network","      // error, display the localized error message to your customer","      // using `result.error.message`.","    }","  };","","  return (","    <button role=\"link\" onClick={handleClick}>","      Checkout","    </button>","  );","}","","ReactDOM.render(<App />, document.getElementById('root'));"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":6},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":37,"column":58},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":38,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["*"]},{"start":{"row":38,"column":1},"end":{"row":38,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":38,"column":2},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":40,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["import React, { useState, useEffect } from 'react';","import logo from './logo.svg';","import './App.css';","","function App() {","  const [currentTime, setCurrentTime] = useState(0);","","  useEffect(() => {","    fetch('/time').then(res => res.json()).then(data => {","      setCurrentTime(data.time);","    });","  }, []);","","  return (","    <div className=\"App\">","      <header className=\"App-header\">","","        ... no changes in this part ...","","        <p>The current time is {currentTime}.</p>","      </header>","    </div>","  );","}","","export default App;",""],"id":9}],[{"start":{"row":40,"column":0},"end":{"row":65,"column":19},"action":"remove","lines":["import React, { useState, useEffect } from 'react';","import logo from './logo.svg';","import './App.css';","","function App() {","  const [currentTime, setCurrentTime] = useState(0);","","  useEffect(() => {","    fetch('/time').then(res => res.json()).then(data => {","      setCurrentTime(data.time);","    });","  }, []);","","  return (","    <div className=\"App\">","      <header className=\"App-header\">","","        ... no changes in this part ...","","        <p>The current time is {currentTime}.</p>","      </header>","    </div>","  );","}","","export default App;"],"id":10},{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"insert","lines":["<"]},{"start":{"row":40,"column":1},"end":{"row":40,"column":2},"action":"insert","lines":["p"]},{"start":{"row":40,"column":2},"end":{"row":40,"column":3},"action":"insert","lines":[">"]},{"start":{"row":40,"column":3},"end":{"row":40,"column":4},"action":"insert","lines":["H"]}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":5},"action":"insert","lines":["i"],"id":11}],[{"start":{"row":40,"column":5},"end":{"row":40,"column":6},"action":"insert","lines":[" "],"id":12},{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["t"]},{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["h"]},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["e"]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["r"]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["e"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["<"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["/"]},{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["p"]}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":[">"],"id":13}],[{"start":{"row":37,"column":58},"end":{"row":40,"column":15},"action":"remove","lines":["","*/","","<p>Hi there</p>"],"id":14}],[{"start":{"row":0,"column":2},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":15},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["*"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":0,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["import React from 'react';","import ReactDOM from 'react-dom';","import { loadStripe } from '@stripe/stripe-js';","// Make sure to call `loadStripe` outside of a component’s render to avoid","// recreating the `Stripe` object on every render.","const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');","","function App() {","  const handleClick = async (event) => {","    // Get Stripe.js instance","    const stripe = await stripePromise;","","    // Call your backend to create the Checkout Session","    const response = await fetch('/create-checkout-session', { method: 'POST' });","","    const session = await response.json();","","    // When the customer clicks on the button, redirect them to Checkout.","    const result = await stripe.redirectToCheckout({","      sessionId: session.id,","    });","","    if (result.error) {","      // If `redirectToCheckout` fails due to a browser or network","      // error, display the localized error message to your customer","      // using `result.error.message`.","    }","  };","","  return (","    <button role=\"link\" onClick={handleClick}>","      Checkout","    </button>","  );","}","","ReactDOM.render(<App />, document.getElementById('root'));",""],"id":16}],[{"start":{"row":0,"column":0},"end":{"row":36,"column":58},"action":"insert","lines":["import React from 'react';","import ReactDOM from 'react-dom';","import { loadStripe } from '@stripe/stripe-js';","// Make sure to call `loadStripe` outside of a component’s render to avoid","// recreating the `Stripe` object on every render.","const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');","","function App() {","  const handleClick = async (event) => {","    // Get Stripe.js instance","    const stripe = await stripePromise;","","    // Call your backend to create the Checkout Session","    const response = await fetch('/create-checkout-session', { method: 'POST' });","","    const session = await response.json();","","    // When the customer clicks on the button, redirect them to Checkout.","    const result = await stripe.redirectToCheckout({","      sessionId: session.id,","    });","","    if (result.error) {","      // If `redirectToCheckout` fails due to a browser or network","      // error, display the localized error message to your customer","      // using `result.error.message`.","    }","  };","","  return (","    <button role=\"link\" onClick={handleClick}>","      Checkout","    </button>","  );","}","","ReactDOM.render(<App />, document.getElementById('root'));"],"id":17}],[{"start":{"row":36,"column":58},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":37,"column":0},"end":{"row":37,"column":1},"action":"insert","lines":["/"]},{"start":{"row":37,"column":1},"end":{"row":37,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":[" "],"id":19}],[{"start":{"row":37,"column":3},"end":{"row":37,"column":48},"action":"insert","lines":["ReactDOM.render(element, container, callback)"],"id":20}],[{"start":{"row":23,"column":9},"end":{"row":25,"column":15},"action":"remove","lines":["If `redirectToCheckout` fails due to a browser or network","      // error, display the localized error message to your customer","      // using "],"id":21},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["d"]},{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":["i"]},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["s"]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["p"]},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["l"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["a"]},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["y"]}],[{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":[" "],"id":22}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":["p"],"id":23},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["p"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":["A"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["S"],"id":24},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["t"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["r"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["i"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["p"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":34,"column":0},"end":{"row":34,"column":58},"action":"remove","lines":["ReactDOM.render(<App />, document.getElementById('root'));"],"id":25}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":48},"action":"remove","lines":["// ReactDOM.render(element, container, callback)"],"id":26}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":1,"column":33},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1613792846095,"hash":"9af8ec8e0ca48ce1b5f4db2264ea0a326d937279"}