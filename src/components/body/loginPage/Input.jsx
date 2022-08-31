import React from 'react';
import {field,useField} from "formik";
import styles from "./loginPage.module.css"

const Input = ({icon,...props}) => {

const[field,meta]=useField(props);


  return (
    <>
    <div className={styles.input}>
    
    <input {...field} {...props}/>
    {/* <span className={styles.eye}>{icon}</span> <br/> */}

    {meta.error}
    </div>
  
    </>
  )
}

export default Input