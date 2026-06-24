import LoginReducer from "./slices/LoginSlice";
import UserReducer from "./slices/User";
import HomeReducer from "./slices/HomeSlice";
import WishlistReducer from "./slices/WishlistSlice";
import SearchReducer from "./slices/SearchSlice";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { thunk } from "redux-thunk";


const main_reducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  home: HomeReducer,
  wishlist: WishlistReducer,
  search: SearchReducer,
})

const root_reducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    return main_reducer({
      login: {
        isLogin: false,
        loginType: "signup",
      },
      user: {
        session: {},
      },
      wishlist: {
        wishlist_data: []
      },
      search: {
        product_filters: null,
      },
    }, action)
  } else {
    return main_reducer(state, action);
  }
};

const persist_config = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const middleware = [thunk]

const persistedReducer = persistReducer(persist_config, root_reducer)


export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);