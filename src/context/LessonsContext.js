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
        case 'change_chosen_lesson':
            return {chosenLesson: action.payload };
        default:
            return state;
    };
};


//actionit
const changeChosenLesson = dispatch =>(lesson) => {
    
    dispatch ({ type: 'change_chosen_lesson', payload: lesson })
};

//hyödynnetään createDataContext komponenttia ja luodaan Contexti.
export const { Provider, Context} = createDataContext(
    lessonsReducer,
    { changeChosenLesson },
    { chosenLesson: ''}
);