import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}){
    if(sessionStorage.getItem("userId") !== null)
        return children
    else
        return <Navigate to='/login'/>
}