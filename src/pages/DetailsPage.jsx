import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ComponentContainer from '../components/ComponentContainer/ComponentContainer.jsx';
import apiData from '../data/apiData.js';

export default function DetailsPage({index, setIndex}){
    const { title } = useParams();

    const imageIndex = apiData.findIndex((image) => image.title === title);

    useEffect(() => {
        setIndex(imageIndex);
    }, [imageIndex, setIndex]);

    return <ComponentContainer title={title} index={imageIndex} setIndex={setIndex}/>
}