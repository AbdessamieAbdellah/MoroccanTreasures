/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateSelectedProduct = /* GraphQL */ `
  subscription OnCreateSelectedProduct(
    $filter: ModelSubscriptionSelectedProductFilterInput
  ) {
    onCreateSelectedProduct(filter: $filter) {
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
export const onUpdateSelectedProduct = /* GraphQL */ `
  subscription OnUpdateSelectedProduct(
    $filter: ModelSubscriptionSelectedProductFilterInput
  ) {
    onUpdateSelectedProduct(filter: $filter) {
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
export const onDeleteSelectedProduct = /* GraphQL */ `
  subscription OnDeleteSelectedProduct(
    $filter: ModelSubscriptionSelectedProductFilterInput
  ) {
    onDeleteSelectedProduct(filter: $filter) {
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
