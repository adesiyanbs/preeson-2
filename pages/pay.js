import React from 'react';
import { useFlutterwave } from 'flutterwave-react-v3';
import Head from 'next/head'

export default function Pay() {
    const config = {
        public_key: 'FLWPUBK_TEST-99c33a4a6db6124913dd2b289e95f79d-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'user@gmail.com',
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
        },
        customizations: {
            title: 'my Payment Title',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="App">
            <Head>
          <title>Schon Peesol Energy | Solar Company</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
            <h1>Hello Ade</h1>

            <button
                onClick={() => {
                    handleFlutterPayment({
                        callback: (response) => {
                            console.log(response);
                        },
                        onClose: () => {},
                    });
                }}
            >
                Pay
            </button>
        </div>
    );
}
