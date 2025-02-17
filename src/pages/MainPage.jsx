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

    const image = apiData[index];
    return (
        <Image url={image.url} title={image.title} onClick={() => navigate(`/details/${image.title}`)} />
    );
}