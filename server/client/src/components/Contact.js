 import { useNavigate } from 'react-router-dom';
import './css/About.css'
import React,{useEffect,useState } from 'react'

 const Contact = () => {


    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callContactPage = async () => {
        try {

            const res = await fetch('https://merngamer2.herokuapp.com/about', {
                 method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }
    useEffect(() => {
        callContactPage();
     
    }, [])




     
     return (
         <div>
             <h1>Contact Us page</h1>
             
             <div className="input-container">
                    <h3>work {userData.work} </h3>
                    <input type="text" name="email"
                     className="box"
                     id="password"
                    
                     placeholder={userData.work}/>             
            </div>
         </div>
     )
 }
 
 export default Contact
 
