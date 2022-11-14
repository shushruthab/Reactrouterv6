import logo from './logo.svg';
import './App.css';
import DogList from './DogList';
import Dogs from "./Dogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Nav';

function App() {
  return (
   <BrowserRouter>
    <Nav />
  </BrowserRouter>
  );
}


export default App;
