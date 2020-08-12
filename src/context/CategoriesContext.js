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
        case 'set_chosen_lesson':
            return {...state, chosenLesson: action.payload};
        default:
            return state;
    };
};

//actionit
const setChosenCategory = dispatch =>(category) => {
    // console.log('provider arvo:')
    // console.log(category)
    dispatch ({ type: 'set_chosen_category', payload: category });
};

//setChosenLesson
const setChosenLesson = dispatch => (lesson) => {
    // console.log('****tallennetaan Contextiin:', lesson)
    dispatch ({ type: "set_chosen_lesson",  payload: lesson })
}


//hyödynnetään createDataContext komponenttia ja luodaan Contexti.
export const { Provider, Context} = createDataContext(
    categoriesReducer,
    { setChosenCategory, setChosenLesson},
    { chosenCategory:'0001', chosenLesson: null}
);