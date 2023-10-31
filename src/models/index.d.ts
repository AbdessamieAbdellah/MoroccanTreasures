import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerPaymentIntent = {
  readonly clientSecret: string;
}

type LazyPaymentIntent = {
  readonly clientSecret: string;
}

export declare type PaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagerPaymentIntent : LazyPaymentIntent

export declare const PaymentIntent: (new (init: ModelInit<PaymentIntent>) => PaymentIntent)

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly quantity: number;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly origin: string;
  readonly seller: string;
  readonly shippingCost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly quantity: number;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly origin: string;
  readonly seller: string;
  readonly shippingCost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly generatedID?: string | null;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly orderproducts?: (SelectedProduct | null)[] | null;
  readonly isShipped?: boolean | null;
  readonly totalPrice: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly generatedID?: string | null;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber?: string | null;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly address?: string | null;
  readonly orderproducts: AsyncCollection<SelectedProduct>;
  readonly isShipped?: boolean | null;
  readonly totalPrice: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerSelectedProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SelectedProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly quantity: number;
  readonly image: string;
  readonly options?: string | null;
  readonly price: number;
  readonly origin: string;
  readonly seller: string;
  readonly shippingCost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderOrderproductsId?: string | null;
}

type LazySelectedProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SelectedProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly quantity: number;
  readonly image: string;
  readonly options?: string | null;
  readonly price: number;
  readonly origin: string;
  readonly seller: string;
  readonly shippingCost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderOrderproductsId?: string | null;
}

export declare type SelectedProduct = LazyLoading extends LazyLoadingDisabled ? EagerSelectedProduct : LazySelectedProduct

export declare const SelectedProduct: (new (init: ModelInit<SelectedProduct>) => SelectedProduct) & {
  copyOf(source: SelectedProduct, mutator: (draft: MutableModel<SelectedProduct>) => MutableModel<SelectedProduct> | void): SelectedProduct;
}