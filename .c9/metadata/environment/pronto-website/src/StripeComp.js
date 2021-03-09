{"filter":false,"title":"StripeComp.js","tooltip":"/pronto-website/src/StripeComp.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["import { loadStripe } from '@stripe/stripe-js';","// Make sure to call `loadStripe` outside of a component’s render to avoid","// recreating the `Stripe` object on every render.","const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');","","function Stripe() {","  const handleClick = async (event) => {","    // Get Stripe.js instance","    const stripe = await stripePromise;","","    // Call your backend to create the Checkout Session","    const response = await fetch('/create-checkout-session', { method: 'POST' });","","    const session = await response.json();","","    // When the customer clicks on the button, redirect them to Checkout.","    const result = await stripe.redirectToCheckout({","      sessionId: session.id,","    });","","    if (result.error) {","      // display `result.error.message`.","    }","  };","","  return (","    <button role=\"link\" onClick={handleClick}>","      Checkout","    </button>","  );","}"],"id":1}],[{"start":{"row":30,"column":1},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["",""]},{"start":{"row":32,"column":0},"end":{"row":32,"column":1},"action":"insert","lines":["e"]},{"start":{"row":32,"column":1},"end":{"row":32,"column":2},"action":"insert","lines":["x"]},{"start":{"row":32,"column":2},"end":{"row":32,"column":3},"action":"insert","lines":["p"]},{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":["o"]},{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["r"]},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":[" "],"id":3},{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["d"]},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["e"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["f"]},{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["a"]},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["u"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["l"]},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":[" "],"id":4},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["S"]},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["t"]},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["r"]},{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["i"]},{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["p"]},{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["e"]},{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":[";"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":69},"end":{"row":3,"column":69},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1613841683622,"hash":"4e427fad718cc37f709bfe8ef26c8925c0ddc8f5"}