import type {RouteProp} from "@react-navigation/native"

export type MainStackParamList = {
    Drawer: undefined;
    Home: undefined;
    Details: {title: string};
    Setting: undefined;
    RestaurantDetails: undefined;
    IdCode:undefined;
    OrderConfirmation:undefined;
    Address: undefined;
    ShopingCart: undefined;
    Product: undefined;
    
    

};

export type DetailsScreenProp = RouteProp<MainStackParamList ,"Details">;