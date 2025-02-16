import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav>
            <Link to='/'>
                <p>Main</p>
            </Link>
            <Link to='/details'>
                <p>Details</p>
            </Link>
        </nav>
    )
}