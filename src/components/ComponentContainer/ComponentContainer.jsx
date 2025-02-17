import apiData from '../../data/apiData';
import Caption from '../Caption/Caption';
import ImageContainer from '../ImageContainer/ImageContainer';
import Title from '../Title/Title';

export default function ComponentContainer({ index, setIndex }){
    const image = apiData[index];

    return( 
        <div>
            <Title title={image.title}/>
            <ImageContainer url={image.url} index={index} setIndex={setIndex}/>
            <Caption caption={image.explanation}/>
        </div>
    );
}