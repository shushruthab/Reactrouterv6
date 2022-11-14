import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilteredDog = ({dogs}) => {
    const {name} = useParams();
    const current = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    let navigate = useNavigate();

    useEffect(() => {
        if (!current) {
            navigate('/dogs');
        }
    }, [current])

    if (current) {
        return (
            <>
            <DogDetails dog={current} />
            <Link to="/dogs">Go Back</Link>
            </>
            )
    }    
    
}

export default FilteredDog;