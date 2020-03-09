import * as types from  '../types/babies';

export const addBaby = (id, name, lastName) => ({
    type: types.BABY_ADDED,
    payload:{
        id,
        name,
        lastName
    }
});

export const selectBaby = index =>({
        type : types.BABY_SELECTED,
        payload: index
});