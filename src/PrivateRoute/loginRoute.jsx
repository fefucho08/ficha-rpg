import { Navigate } from 'react-router-dom'

export default function LoginRoute({children}){
    if(sessionStorage.getItem("userId") === null)
        return (children)
    else
        return <Navigate to="/"/>
}