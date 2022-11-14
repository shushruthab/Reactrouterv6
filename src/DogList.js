
import { useState } from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";


const DogList = ({dogs}) => {
        
    return (
        <div>
            {dogs.map(dog => (
                <DogDetails key={dog.key} dog={dog}/>
            ))}
        </div>
    )
}

export default DogList;