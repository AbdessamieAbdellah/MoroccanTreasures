/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        generatedID
        userSub
        fullName
        phoneNumber
        country
        city
        address
        isShipped
        totalPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        generatedID
        userSub
        fullName
        phoneNumber
        country
        city
        address
        isShipped
        totalPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSelectedProduct = /* GraphQL */ `
  query GetSelectedProduct($id: ID!) {
    getSelectedProduct(id: $id) {
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
export const listSelectedProducts = /* GraphQL */ `
  query ListSelectedProducts(
    $filter: ModelSelectedProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSelectedProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSelectedProducts = /* GraphQL */ `
  query SyncSelectedProducts(
    $filter: ModelSelectedProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSelectedProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
