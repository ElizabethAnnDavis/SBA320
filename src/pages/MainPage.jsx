import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiData from '../data/apiData';
import Image from '../components/Image/Image';

export default function MainPage({ index, setIndex }){
    const navigate = useNavigate();

    function nextImg(){
        setIndex((prevIndex) => (prevIndex + 1) % apiData.length);
    }

    useEffect(() => {
        const interval = setInterval(nextImg, 5000);
    }, [])

    return (
        <Image url={apiData[index].url} title={apiData[index].title} onClick={() => navigate(`/details/${apiData[index].title}`)} />
    );
}