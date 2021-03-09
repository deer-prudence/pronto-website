import stripe
import json

from flask import Flask, jsonify, request

app = Flask(__name__)

stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'


@app.route('/create-payment-intent/<amount>', methods=['POST'])
def create_payment(amount):
    try:
        print("here")
        print(amount)
        intent = stripe.PaymentIntent.create(
            amount=20,
            currency='usd'
        )
        return jsonify({
          'clientSecret': intent['client_secret']
        })
    except Exception as e:
        print("exception")
        print(e)
        return jsonify(error=str(e)), 403


if __name__== '__main__':
    app.run(port=4242)