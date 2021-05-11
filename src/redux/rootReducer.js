import {combineReducers} from 'redux';
import userReducer from './User/user.reducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer'
export const rootReducer= combineReducers({
    user:userReducer,
    productsData:productsReducer,
    cartData:cartReducer
});
const configStorage={
    key:'root',
    storage,
    whiteList:['cartData']
}
export default persistReducer(configStorage,rootReducer);