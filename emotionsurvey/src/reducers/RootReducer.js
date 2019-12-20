import { combineReducers } from "redux";
import EmotionReducer from './emotionReducer'
const rootReducer = combineReducers({
  emotion: EmotionReducer
});

export default rootReducer;
