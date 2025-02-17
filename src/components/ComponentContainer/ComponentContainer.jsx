import apiData from '../../data/apiData';
import Caption from '../Caption/Caption';
import ImageContainer from '../ImageContainer/ImageContainer';
import Title from '../Title/Title';

export default function ComponentContainer({ title }){
    const image = apiData.find(item => item.title === title);
    
    return( 
        <div>
            <Title title={image.title}/>
            <ImageContainer url={image.url}/>
            <Caption caption={image.explanation}/>
        </div>
    );
}