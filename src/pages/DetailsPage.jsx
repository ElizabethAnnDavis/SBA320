import { useParams } from 'react-router-dom';
import ComponentContainer from '../components/ComponentContainer/ComponentContainer.jsx';

export default function DetailsPage(){
    const { title } = useParams();
    return <ComponentContainer title={title}/>
}