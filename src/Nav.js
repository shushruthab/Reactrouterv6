import {Route, Routes, Navigate} from 'react-router-dom'
import DogDetails from './DogDetails';
import DogList from './DogList';
import Dogs from './Dogs';
import FilteredDog from './FilteredDog';

const Nav = () => {
    return (
        <>
        <Routes>
            <Route exact path='/dogs' element={<DogList dogs={Dogs}/>}></Route>
            <Route exact path='/dogs/:name' element={<FilteredDog dogs={Dogs} />} ></Route>
            <Route path="*" element={<Navigate to="/dogs" replace />}/>
        </Routes>
        </>
    )
    
}

export default Nav;