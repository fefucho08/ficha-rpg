import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './loginBox.css'
import LoginInput from './loginInput'
import toast from 'react-hot-toast'

export default function Login({isRegister}){

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const useStatesInput = {
        username: {
            value: usernameInput,
            method: setUsernameInput
        },
        password: {
            value: passwordInput,
            method: setPasswordInput
        }
    }

    const navigate = useNavigate()

    const getData = () => {
        return fetch("https://servidorrpg.onrender.com/users", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .catch(err => console.log(err))
    }

    const auth = async (e) => {
        e.preventDefault()
        let userId
        await getData()
        .then(resp => {
            resp.forEach(user => {
                if(user.username === usernameInput)
                    if(user.password === passwordInput)
                        userId = user.id
            })
        })
        .catch(err => toast.error(err))
        if(userId !== undefined){
            sessionStorage.setItem("userId", userId)
            setUsernameInput("")
            setPasswordInput("")
            navigate("/")
            window.location.reload()
        }   
        else
            toast.error("Usuário ou senha incorreto")
    } 

    return(
        <div className="loginBox">
            <h2>Login</h2>
            <form className='registerForm' onSubmit={(e) => auth(e)}>
                <LoginInput
                    text="Username"
                    type="text"
                    att="username"
                    useStatesInput = {useStatesInput}
                />
                <LoginInput
                    text="Senha"
                    type="password"
                    att="password"
                    useStatesInput = {useStatesInput}
                />
                <button className='submitButton' type='submit'>Entrar</button>
            </form>
            <p>Ainda não possui conta? <span className='changeForm' onClick={() => isRegister(true)}>Registar</span></p>
        </div>
    )
}