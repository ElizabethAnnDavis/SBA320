import { useEffect, useState } from 'react';
import apiData from '../data/apiData';
import Image from '../components/Image/Image';

export default function MainPage({ index, setIndex }){
    function nextImg(){
        // Loop to 1st img
        setIndex((prevIndex) => (prevIndex + 1) % apiData.length);
    }

    useEffect(() => {
        // Loop thru imgs
        const interval = setInterval(nextImg, 1000);
    }, [])

    return (
        <Image url={apiData[index].url} />
    );
}