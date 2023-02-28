import React,{useState} from 'react'
import css from './FormValidation.module.css'
const FormValidation = () => {
    const [value,setvalues]=useState({
        name:"",
email:"",
password:"",
cpassword:""})
const [formValue, setformValue] = useState([]);
const [error, seterror] = useState({  });

const changeHandler=(e)=>{
setvalues({...value,[e.target.name]:e.target.value.trim()})
console.log("values",value)
}
const submitHandler=(e)=>{
e.preventDefault();
seterror(validate(value))
setformValue([...formValue,{formValue:value}])
console.log("form value",formValue)
}
const validate=({password,cpassword})=>{
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


if(password!==cpassword){
  alert("Enter correct credentials")
}
if(!regex.test(password)){
    alert("Enter a strong password")

}

}
  return (
<>
   <div className={css.main}>
   <div className={css.left}>  
   <h2 style={{textAlign:"center"}}>Login Form</h2>
     <form onSubmit={submitHandler}>
<input onChange={changeHandler} type="text" name='name' required placeholder='Name' /> <br /> 
<input onChange={changeHandler} type="email" name='email' placeholder='Email' required/> <br />
<input onChange={changeHandler} type="password" name='password' required placeholder='Password' /> <br />
<input onChange={changeHandler} type="password" name='cpassword' required placeholder='Confirm Password' /> <br />
<input type="submit" style={{backgroundColor:"#00f2fe",border:"none" ,color:"white",fontSize:20}} value='LOG IN' />
   </form>
   </div>
   <div className={css.right}>
<img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
   </div>

       </div> 
       
       </>
  )
}

export default FormValidation;
