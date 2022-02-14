import React, { useEffect } from 'react'
import {useNavigate} from  "react-router";
const Logout = () => {

    // promises
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
                
            },
            credentials:"include"
        }).then((res) => {
          //  dispatch({type:"USER", payload: false});
            navigate ('/', {replace: true});
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <div>
          <h1>Logout you</h1> 
        </div>
    )
}

export default Logout
