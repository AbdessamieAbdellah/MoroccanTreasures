// reducer.ts
import { ActionTypes, ADD, UPDATE, DELETE, Item } from '../actions';

interface State {
  items: Item[];
}

const initialState: State = {
  items: [
    
  ],
};

const cartReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.productID === action.payload.itemId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };
    case DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item.productID !== action.payload.itemId),
      };


      // case DELETE:
      //   const indexToDelete = state.items.findIndex((item) => item.productID === action.payload.itemId);
      //   if (indexToDelete !== -1) {
      //     const newItems = [...state.items];
      //     newItems.splice(indexToDelete, 1);
      
      //     return {
      //       ...state,
      //       items: newItems,
      //     };
      //   }
      //   return state;
      



    default:
      return state;
  }
};

export default cartReducer;
