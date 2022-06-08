import { combineReducers } from 'redux';

import { 
    bookListReducer,
    bookDetailsReducer,
    bookReviewCreateReducer,
    bookTopRatedReducer,
    bookSaleReducer,
    bookNewReleasesReducer,
    bookSearchReducer,
} from './bookReducers';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailReducer,
    userUpdateProfileReducer,
} from './userReducers';

import {
    orderCreateReducer,
    orderDetailReducer,
    orderPayReducer,
    orderDeliverReducer,
    orderListMyReducer,
} from './orderReducers';

import { cartReducer } from './cartReducers';

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetail: bookDetailsReducer,
    bookReviewCreate: bookReviewCreateReducer,
    bookTopRated: bookTopRatedReducer,
    bookSale: bookSaleReducer,
    bookNewReleases: bookNewReleasesReducer,
    bookSearch: bookSearchReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetail: orderDetailReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer
});

export default reducer;