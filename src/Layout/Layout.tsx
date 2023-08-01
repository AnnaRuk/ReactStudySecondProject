import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


export default function Layout():JSX.Element {
  return (
    
<>
<header>
    <h1>With this knowledge You will definitely become a good programmer</h1>
    <NavBar />
</header>
<main>
    <Outlet/>
</main>
<footer>
    <p>useful links</p>
</footer>



</>



  );
}

