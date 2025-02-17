import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiData from '../data/apiData';
import Image from '../components/Image/Image';

export default function MainPage({ index, setIndex }){
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval((() => (setIndex((prevIndex) => (prevIndex + 1) % apiData.length))), 5000);

        return () => clearInterval(interval);
    }, [])

    console.log("Current index in MainPage: ", index);

    return (
        <Image url={apiData[index].url} title={apiData[index].title} onClick={() => navigate(`/details/${apiData[index]}`)} />
    );
}