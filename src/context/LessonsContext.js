import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
/**
 * 
 * 
 * @param {*} state TODO: kirjoita tähän selite mitä stateja Context sisältää
 * @param {*} action TODO: kirjoita tähän selite mitä actioneja Context sisältää
 */



//Reducer
const lessonsReducer = (state, action) => {
    switch (action.type) {
        case 'set_chosen_lesson':
            return {...state, chosenLesson: action.payload };
        default:
            return state;
    };
};

//actionit
const setChosenLesson = dispatch =>(lesson) => {
    // console.log(lesson)
    dispatch ({ type: 'set_chosen_lesson', payload: lesson });
};

//hyödynnetään createDataContext komponenttia ja luodaan Contexti.
export const { Provider, Context} = createDataContext(
    lessonsReducer,
    { setChosenLesson },
    { chosenLesson:'default lesson'}
);