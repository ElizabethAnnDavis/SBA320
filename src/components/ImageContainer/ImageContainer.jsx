import { useReducer } from 'react';
import Image from '../Image/Image';
import './ImageContainer.css';
import imageReducer from '../../utilities/imageReducer.mjs';
import apiData from '../../data/apiData';

export default function ImageContainer({ url, index, setIndex }){

    return(
        <div className="container">
            <button onClick={() => setIndex((prevIndex) => (prevIndex - 1 + apiData.length) % apiData.length)}>PREVIOUS</button>
            <Image url={url}/>
            <button onClick={() => setIndex((prevIndex) => (prevIndex + 1) % apiData.length)}>NEXT</button>
        </div>
    );
}