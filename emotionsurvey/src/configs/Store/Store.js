import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from '../../reducers/RootReducer';
import thunkMiddleware from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";


const middleware = applyMiddleware(thunkMiddleware);

const Store = createStore(RootReducer, composeWithDevTools(middleware));
export const persistor = persistStore(Store)
export default  Store;
