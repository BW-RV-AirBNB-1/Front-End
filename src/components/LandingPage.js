import React from "react";
import { useHistory } from "react-router-dom"

export default function LandingPage() {
    let history = useHistory();

    const goToLogin = () => {
      history.push('/login');
    }
  
    const goToRegister = () => {
      history.push('/register');
    }
    return (
        <div>
            <h1>This is the landing page</h1>
             <button onClick={goToLogin}>Login</button>
             <button onClick={goToRegister}>Register</button>
        </div>
    )
}