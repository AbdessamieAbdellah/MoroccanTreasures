// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Order, SelectedProduct, PaymentIntent } = initSchema(schema);

export {
  Product,
  Order,
  SelectedProduct,
  PaymentIntent
};