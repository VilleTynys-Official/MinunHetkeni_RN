import {useEffect, useState} from 'react';
import DataBaseInformation from '../data/DataBaseInformation.json';

//hook that has the businesslogic for getting categories from database

export default () =>{
    const [categories, setCategories] = useState([]);
        
    //haetaan kategoriat
    const categoriesApi =  ()=> {
            const response =  DataBaseInformation;
            setCategories(response.kategoriat)
    };

    //default haku.
    useEffect(()=>{
        categoriesApi()
    }, []);

    return categories;
};