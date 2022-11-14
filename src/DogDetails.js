import { Link, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import Dogs from './Dogs';

const DogDetails = ({dog}) => {
      
    const imgSource = `./dogs/${dog.src}.jpg`;
    return (
        <div>
            <img src={imgSource} alt={dog.name} />
            <h1 data-id={dog.key}>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            <ul>Dog Facts:
                {dog.facts.map(f => (
                    <li>{f}</li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails;