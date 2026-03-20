import {register} from '@shopify/web-pixels-extension';

const ORDER_SUCCESS_URL = 'https://vibestation.com/order-success';

register(({analytics}) => {
  analytics.subscribe('checkout_completed', (event) => {
    console.log('checkout_completed fired', event);

    /*
     * Shopify app web pixels run in a strict sandbox.
     * They can subscribe to checkout_completed, but they cannot
     * redirect the top browser window with window.location.
     */
    console.warn(
      `checkout_completed received, but app web pixels can't redirect the browser to ${ORDER_SUCCESS_URL} from the strict sandbox.`
    );
  });
});
