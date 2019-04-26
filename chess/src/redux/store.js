// import { createStore } from "redux";
// import rootReducer from "./reducers";

// export default createStore(rootReducer);
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default store;