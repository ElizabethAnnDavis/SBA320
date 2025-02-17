import { useReducer } from 'react';
import Image from '../Image/Image';
import './ImageContainer.css';
import imageReducer from '../../utilities/imageReducer.mjs';
import apiData from '../../data/apiData';

export default function ImageContainer({ url, index, setIndex }){

    function handlePrevious(){
        console.log('Previous index:', index);
        setIndex((prevIndex) => (prevIndex - 1 + apiData.length) % apiData.length);
    }

    function handleNext(){
        console.log('Previous index:', index);
        setIndex((prevIndex) => (prevIndex + 1) % apiData.length);
    }

    return(
        <div className="container">
            <button onClick={handlePrevious}>PREVIOUS</button>
            <Image url={url}/>
            <button onClick={handleNext}>NEXT</button>
        </div>
    );
}