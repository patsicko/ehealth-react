import React from "react";
import { Field, useField } from "formik";
import { icons } from "react-icons";
import styles from  "./signupPage.module.css"

const Input=({icons,...props})=>{

const[field,meta]=useField(props)




    return(<>
    <div className={styles.input}>

    <input {...field} {...props}/>
    <span className={styles.eye}>{icons}</span>
    {meta.error}
    

    </div>
    
    </>)
}

export default Input