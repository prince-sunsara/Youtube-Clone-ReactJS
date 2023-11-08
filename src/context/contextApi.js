import React, { createContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';
import videos from '../videos';

export const Context = createContext();

export const ContenxtApi = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false)
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(()=>{
      fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])

    const fetchSelectedCategoryData = (query) => {
      setLoading(true)
      // fetchDataFromApi(`search/?q=${query}`).then((videos) => {
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
        // console.log(contents);
        setSearchResults(contents);
        // setSearchResults(videos);
        setLoading(false);
      }).catch((err) => console.log(err));
    }

  return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu 
    }}>
        {props.children}
    </Context.Provider>
  )
}

