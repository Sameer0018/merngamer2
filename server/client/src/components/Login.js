import React,{useState} from 'react'
import{useNavigate,Link} from"react-router-dom";

import './css/Login.css';
  import './css/style.css'
const Login = () => {
const navigate =    useNavigate();
    const[email,setEmail] = useState(' ');
    const[password,setPassword] = useState('');

    const loginUser =async(e)=>{
        e.preventDefault();

    const res = await fetch ('/signin', {
        method:"POST",
        headers:{
            "Content-Type" :"application/json"

        },
        body:JSON.stringify({
            email,
            password
        })
    });
const data =res.json();
if(res.status===400 || !data){
    window.alert("Invalid Credentials");

}else{
    window.alert("Login successfully");
    navigate("/");
}
    }
    
    return (
        <>

                    <div className="containers">
                    <form method="POST" id ="register-form" className="form">         

                           <h2 className="title">Login</h2>
                            
                            <div className="input-container">
                                <input type="email" id ="email"
                                 name="email" className="box" 
                                 value={email}
                                 
                                 onChange={ (e) =>setEmail(e.target.value)}
                                 placeholder="Email"/>
                                
                            </div>
                            <div className="input-container">
                                <input type="password" name="email"
                                 className="box"
                                 id="password"
                                 value={password}
                                 
                                onChange={ (e) =>setPassword(e.target.value)}
                                 placeholder="password"/>
                            
                            </div>
                            



                                                        <input type="submit" name="signin" id="signin"
                                                        value="Login"
                                                        onClick={loginUser} className="btn" />

<Link to="#">Forgot Password</Link>
                        </form>

                        <div className="side">
                        <img src="https://wallpapercave.com/w/wp6000674.jpg" alt="not attach"  />
               
               </div>

                    </div>

    </>
    )
}

export default Login
