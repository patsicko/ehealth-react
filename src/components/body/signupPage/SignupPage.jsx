
import styles from "./signupPage.module.css"

import React from 'react';
import { Formik,Form } from 'formik';
import Input from "./Input";
import  {Button}  from 'react-bootstrap';
import {AiOutlineGoogle} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import * as yup from "yup";



const Users = () => {


  const schema=yup.object().shape({
  
    name:yup.string().required(),
    email:yup.string().required(),
    password:yup.string().required()

  });



   const initialValues={
    name:"",
    email:'',
    password:''
   }
 
   const handleSubmit=(values)=>{
   console.log(values);

   }

   
  return (
    <div className={styles.form}>
      <span className={styles.sign}>Sign Up</span> <br />
      <Formik
      
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}

      >
      <Form>
      <br/>
      <Button   variant="info" className={styles.google}><AiOutlineGoogle/> Sign up with google</Button>
       
      <br/> <br/>
      <Input
      name="name"
      type="text"
      placeholder="name"
      className="form form-control"
      
      />
      <br />
      
      <Input
      name="email"
      type="email"
      placeholder="email"
      className="form form-control"
    
      
      />
      <br />
     
      <Input
      name="password"
      type="password"
      placeholder="password"
      className="form form-control"
      icons= {<AiOutlineEye/>}
      
      />

     <br />
     <Button type="submit" className={styles.btn} >Sign Up</Button>
      </Form>
    
      </Formik>
        
    </div>
  )
}

export default Users