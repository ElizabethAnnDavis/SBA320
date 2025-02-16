import Caption from "../Caption/Caption";
import ImageContainer from "../ImageContainer/ImageContainer";
import Title from "../Title/Title";

export default function ComponentContainer(){
    return( 
        <div>
            <Title />
            <ImageContainer />
            <Caption />
        </div>
    );
}