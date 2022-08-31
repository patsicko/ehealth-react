import React from 'react';
import styles from "./navigation.module.css";
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <div className={styles.navigations}>
    
    <Link to="/">Home</Link>
    <Link to="about">About Us</Link>
    <Link to="services">Services</Link>
    <Link to="contact">Contact Us</Link>
    <Link to="login">Login</Link>
    <Link to="signup">Sign Up</Link>
    
    </div>
  )
}

export default Navigation