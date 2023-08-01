import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar():JSX.Element {
  return (
    

   <nav className={styles.mainMenu}>

<NavLink className={styles.mainMenuItem} to="java">Java</NavLink>
<NavLink className={styles.mainMenuItem} to="frontend">FrontEnd</NavLink>
<NavLink className={styles.mainMenuItem} to="qa">QA</NavLink>
<NavLink className={styles.mainMenuItem} to="backend">BackEnd</NavLink>
<NavLink className={styles.mainMenuItem} to="/">Main Page</NavLink>


   </nav>


  );
}
