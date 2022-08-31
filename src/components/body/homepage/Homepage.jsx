import React from 'react';
import styles from "./homepage.module.css";
import logo from "../../../assets/logo.png"


const Homepage = () => {
  return (
    <div>
        
       
        <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Homepage