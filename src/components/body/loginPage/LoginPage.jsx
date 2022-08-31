import React from 'react';
import styles from "./loginPage.module.css";
import {Formik,Form}  from "formik";
import Input from './Input';
import * as yup from "yup"
import {Button}  from 'react-bootstrap';
import {AiFillEye} from "react-icons/ai";
import {AiOutlineGoogle} from "react-icons/ai"

const LoginPage = () => {

const schema=yup.object().shape({

   username:yup.string().required() ,
   password:yup.string().required()
})

const initialValues={
    username:'',
    password:''
}

const handleSubmit=(values)=>{
    console.log(values)
}


  return (
   <div className={styles.form}>
        <h2 className={styles.h2}>Log In</h2>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        
        >
        
        <Form>
        <Input
        name="username"
        placeholder="username"
        type="text"
        className="form form-control"
        
        />
        <br />
       <Input
        name="password"
        placeholder="password"
        type="text"
        className="form form-control"
        icon={<AiFillEye/>}
        />
       <br />


       <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"/>  &nbsp; &nbsp; Remember me
      </label>

         <br /> <br />
     
         <Button variant='primary' className={styles.google}> <span className={styles.googleIcon}><AiOutlineGoogle/></span>  Login with google</Button>

         <br />
         <br />
         <Button variant="success" className={styles.login} >Login</Button>
         <br />
          <span className={styles.forgot}> Forgot password ?</span>   <br />  
   
          <span   className={styles.dontHave}>Dont have account ? </span> <br />  

          <span className={styles.sign}> Sign Up</span>


        </Form>




        </Formik>
   </div>
  

    
  )
}

export default LoginPage