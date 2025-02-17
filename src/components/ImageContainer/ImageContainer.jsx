import Image from '../Image/Image';
import './ImageContainer.css';

export default function ImageContainer({ url }){
    return(
        <div className="container">
            <button>Previous</button>
            <Image url={url}/>
            <button>Next</button>
        </div>
    );
}