import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
// const apikey = process.env.REACT_APP_YOUTUBE_API_KEY
// console.log(apikey);

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options)
        return data;
    } catch (error) {
        console.log(error)
    }
};
