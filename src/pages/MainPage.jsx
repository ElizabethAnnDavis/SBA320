import { useEffect, useState } from 'react';
import apiData from '../data/apiData';
import getAPIData from '../utilities/getAPIData';

export default function MainPage(){
    const [data, setData] = useState([]);

    console.log('On Main Page', apiData[0].url);

    // useEffect(() => {
    //     async function getAPIData(){
    //         try{
    //             const apiKey = import.meta.env.VITE_API_KEY;
    //             const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`);
    //             const data = await response.json();
    //             console.log(data[0].explanation);
    //             setData(data);
    //         }catch(e){
    //             console.log(`ERROR: ${e.message}`);
    //         };
    //     }

    //     getAPIData();
    // }, [])

    return (
        <img src={apiData[0].url} />
    );
}