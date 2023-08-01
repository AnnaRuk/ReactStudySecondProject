import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import FrontEnd from '../FrontEnd/FrontEnd';
import Java from '../Java/Java';
import Qa from '../Qa/Qa';
import BackEnd from '../BackEnd/BackEnd';
import NavBar from '../NavBar/NavBar';

export default function HomePage():JSX.Element {
  return (

    <Routes>

<Route path="/" element={<Layout />}>

<Route path="frontend" element={<FrontEnd />}/>
<Route path="java" element={<Java />}/>
<Route path="qa" element={<Qa />}/>
<Route path="backend" element={<BackEnd />}/>


</Route>



    </Routes>
  );
}
