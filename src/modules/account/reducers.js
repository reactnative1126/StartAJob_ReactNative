import types from './types';

const initialState = {
    logged: false,
    user: {
        email: '',
        password: '',
    }
};

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case types.SIGN_IN:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case types.SIGN_OUT:
            return {
                ...state,
                logged: false,
                user: initialState,
            }
        default:
            return state;
    }
}