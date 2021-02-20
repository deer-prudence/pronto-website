import stripe

from flask import Flask, jsonify

app = Flask(__name__)

stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
  session = stripe.checkout.Session.create(
    payment_method_types=['card'],
    line_items=[{
      'price_data': {
        'currency': 'usd',
        'product_data': {
          'name': 'T-shirt',
        },
        'unit_amount': 2000,
      },
      'quantity': 1,
    }],
    mode='payment',
    success_url='https://example.com/success',
    cancel_url='https://example.com/cancel',
  )

  return jsonify(id=session.id)

if __name__== '__main__':
    app.run(port=4242)