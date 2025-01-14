import React, {useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import {createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword  } from '../firebase'
    
    const defaultFormFields ={
        email: '',
        password: ''
    }

function Login () {
   const navigate = useNavigate();
   const [formFields, setFormFields]=useState(defaultFormFields)
   const{email, password}=formFields

   const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value})
   }

   const resetFormFields = ()=>{
    setFormFields(defaultFormFields)
   }

    const signIn = (event) => {
        event.preventDefault();
       
       resetFormFields()
        navigate('/')
        return signInAuthUserWithEmailAndPassword(email, password)
    }




    const register = (event) => {
        event.preventDefault();
        resetFormFields()
        return createAuthUserWithEmailAndPassword(email,password)


    }



  return (
    <div className="login">
        <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo'/>
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' name='email' value={email} onChange={handleChange}/>

                <h5>Password</h5>
                <input type='password' name='password' value={password} onChange={handleChange}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's-Clone-V2 Conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
            </p>
            <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>

        </div>


    </div>
  )
}

export default Login