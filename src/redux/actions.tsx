// actions.ts
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export interface Item {
  productID: string;
  title: string;
  quantity: number;
}

export interface AddItemAction {
  type: typeof ADD;
  payload: Item;
}

export interface UpdateItemQuantityAction {
  type: typeof UPDATE;
  payload: {
    productID: string;
    newQuantity: number;
  };
}

export interface DeleteItemAction {
  type: typeof DELETE;
  payload: string;
}

export type ActionTypes = AddItemAction | UpdateItemQuantityAction | DeleteItemAction;

export const addItem = (item: Item): AddItemAction => ({
  type: ADD,
  payload: item,
});

export const updateItemQuantity = (productID: string, newQuantity: number): UpdateItemQuantityAction => ({
  type: UPDATE,
  payload: { productID, newQuantity },
});

export const deleteItem = (productID: string): DeleteItemAction => ({
  type: DELETE,
  payload: productID,
});
