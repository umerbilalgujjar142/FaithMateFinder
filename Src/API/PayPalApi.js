let baseUrl = 'https://api-m.sandbox.paypal.com';
const base64 = require('base-64');

let clientId =
  'ART1LL2k6_5EW6oo73CaXV9Nn7MqfaPV7Mxm_3jcfRwXc7fUvh_Gpy0FnCdqRp2-42gRbU8Qhape8nz_';
let secretKey = 'EFf9fwCiKhY33iqGKcUmYNFhExb-9NVoAC8UdNLJ0N3soVYp2l3RVsFscjI1Gb2Jho1Sk9bZjby5azlc';

const generateToken = () => {
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append(
    'Authorization',
    'Basic ' + base64.encode(`${clientId}:${secretKey}`)
  );

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: 'grant_type=client_credentials',
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + '/v1/oauth2/token', requestOptions)
      .then(response => response.text())
      .then(result => {
        const { access_token } = JSON.parse(result);
        resolve(access_token);
      })
      .catch(error => {
        console.log('Error raised', error);
        reject(error);
      });
  });
};

const createOrder = (token = '', itemName, itemDescription, itemQuantity, itemValue) => {
  const orderDetail = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        items: [
          {
            name: itemName,
            description: itemDescription,
            quantity: itemQuantity,
            unit_amount: {
              currency_code: 'USD',
              value: itemValue,
            },
          },
        ],
        amount: {
          currency_code: 'USD',
          value: itemValue,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: itemValue,
            },
          },
        },
      },
    ],
    application_context: {
      return_url: 'https://example.com/return',
      cancel_url: 'https://example.com/cancel',
    },
  };

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderDetail),
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + '/v2/checkout/orders', requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log('Result:', result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch(error => {
        console.log('Error raised', error);
        reject(error);
      });
  });
};

const capturePayment = (id, token = '') => {
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + `/v2/checkout/orders/${id}/capture`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log('Result:', result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch(error => {
        console.log('Error raised', error);
        reject(error);
      });
  });
};

export default {
  generateToken,
  capturePayment,
  createOrder,
};
