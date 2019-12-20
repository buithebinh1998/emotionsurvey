import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from '../../reducers/RootReducer';
import thunkMiddleware from "redux-thunk";


const middleware = applyMiddleware(thunkMiddleware);

const Store = createStore(RootReducer, composeWithDevTools(middleware));
export default  Store;
