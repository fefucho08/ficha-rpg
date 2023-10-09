import { useState } from "react"
import Register from "../components/login/register"
import Login from "../components/login/login"
import './login.css'

export default function LoginPage(){
    const [register, isRegister] = useState(true)

    return(
        <div className="loginContainer">
            {register ? <Register isRegister={isRegister}/> : <Login isRegister={isRegister}/>}
        </div>
    )
}