import Image from "../Image/Image";
import './ImageContainer.css';

export default function ImageContainer(){
    return(
        <div className="container">
            <button>Previous</button>
            <Image />
            <button>Next</button>
        </div>
    );
}