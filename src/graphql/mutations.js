/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      quantity
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      origin
      seller
      shippingCost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      quantity
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      origin
      seller
      shippingCost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      quantity
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      origin
      seller
      shippingCost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      generatedID
      userSub
      fullName
      phoneNumber
      country
      city
      address
      orderproducts {
        nextToken
        startedAt
        __typename
      }
      isShipped
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      generatedID
      userSub
      fullName
      phoneNumber
      country
      city
      address
      orderproducts {
        nextToken
        startedAt
        __typename
      }
      isShipped
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      generatedID
      userSub
      fullName
      phoneNumber
      country
      city
      address
      orderproducts {
        nextToken
        startedAt
        __typename
      }
      isShipped
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createSelectedProduct = /* GraphQL */ `
  mutation CreateSelectedProduct(
    $input: CreateSelectedProductInput!
    $condition: ModelSelectedProductConditionInput
  ) {
    createSelectedProduct(input: $input, condition: $condition) {
      id
      title
      quantity
      image
      options
      price
      origin
      seller
      shippingCost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderproductsId
      __typename
    }
  }
`;
export const updateSelectedProduct = /* GraphQL */ `
  mutation UpdateSelectedProduct(
    $input: UpdateSelectedProductInput!
    $condition: ModelSelectedProductConditionInput
  ) {
    updateSelectedProduct(input: $input, condition: $condition) {
      id
      title
      quantity
      image
      options
      price
      origin
      seller
      shippingCost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderproductsId
      __typename
    }
  }
`;
export const deleteSelectedProduct = /* GraphQL */ `
  mutation DeleteSelectedProduct(
    $input: DeleteSelectedProductInput!
    $condition: ModelSelectedProductConditionInput
  ) {
    deleteSelectedProduct(input: $input, condition: $condition) {
      id
      title
      quantity
      image
      options
      price
      origin
      seller
      shippingCost
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderproductsId
      __typename
    }
  }
`;
