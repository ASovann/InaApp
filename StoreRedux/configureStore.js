import { createStore } from 'redux';
import toCart from "./Reducers/cartReducer";

const configureStore = () => {
    return createStore(toCart)
}

export default configureStore;