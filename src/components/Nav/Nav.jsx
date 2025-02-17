import { Link } from 'react-router-dom';
import { useState } from 'react';
import apiData from '../../data/apiData';
import './Nav.css';


export default function Nav(){
    const [isDroppedDown, setIsDroppedDown] = useState(false);

    // const toggleDD = () => {
    //     if(!isDroppedDown){
    //         setIsDroppedDown(true);
    //     }else{
    //         setIsDroppedDown(true);
    //     };
    // };

    return (
        <nav>
            <Link to='/'>
                <p>Main</p>
            </Link>
            {/* <Link to='/details'>
                <p>Details</p>
            </Link> */}
            <div className='dropdown'>
                <p className='ddBtn' onClick={() => (setIsDroppedDown(prevState => !prevState))}>Image Titles</p>
                {isDroppedDown && (
                    <div className='ddContent'>
                        {apiData.map((image, index) => (
                            <Link key={index} to={`/details/${image.title}`}>{image.title}</Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}