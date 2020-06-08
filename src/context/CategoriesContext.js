import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
/**
 * 
 * 
 * @param {*} state TODO: kirjoita tähän selite mitä stateja Context sisältää
 * @param {*} action TODO: kirjoita tähän selite mitä actioneja Context sisältää
 */



//Reducer
const categoriesReducer = (state, action) => {
    switch (action.type) {
        case 'set_chosen_category':
            return {...state, chosenCategory: action.payload };
        default:
            return state;
    };
};

//actionit
const setChosenCategory = dispatch =>(category) => {
    console.log('provider arvo:')
    console.log(category)
    dispatch ({ type: 'set_chosen_category', payload: category });
};

//hyödynnetään createDataContext komponenttia ja luodaan Contexti.
export const { Provider, Context} = createDataContext(
    categoriesReducer,
    { setChosenCategory },
    { chosenCategory:'0001'}
);