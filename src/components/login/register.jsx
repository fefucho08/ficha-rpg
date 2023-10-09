import { useState } from 'react'
import LoginInput from './loginInput'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import './loginBox.css'

export default function Register({isRegister}){

    const [nameInput, setNameInput] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const useStatesInput = {
        name: {
            value: nameInput,
            method: setNameInput
        },
        username: {
            value: usernameInput,
            method: setUsernameInput
        },
        email: {
            value: emailInput,
            method: setEmailInput
        },
        password: {
            value: passwordInput,
            method: setPasswordInput
        },
        confirm: {
            value: confirmPassword,
            method: setConfirmPassword
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

    const createUser = async (e) => {
        e.preventDefault();
        if(passwordInput !== confirmPassword)
            toast.error("As senhas não coincidem!")
        else {
            let hasAnotherUser = false
            await getData()
            .then((resp) => {
                resp.forEach(user => {
                    if(user.username === usernameInput)
                        hasAnotherUser = true
                });
                if(!hasAnotherUser){
                    const newUser = {
                        name: nameInput,
                        username: usernameInput,
                        email: emailInput,
                        password: passwordInput,
                        characters: [],
                        campaigns: [],
                        id: crypto.randomUUID()
                    }
                    fetch("https://servidorrpg.onrender.com/users", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                    .then(res => res.json())
                    .then(data => sessionStorage.setItem("userId", data.id))
                    .catch(err => console.log(err))
                    setNameInput("")
                    setUsernameInput("")
                    setEmailInput("")
                    setPasswordInput("")
                    setConfirmPassword("")
                    navigate("/")
                }
                else{
                    toast.error("Usuário indisponível!")
                }
            })
        }
    }

    return(
        <div className="loginBox">
            <h2>Criar uma conta</h2>
            <form className='registerForm' onSubmit={(e) => createUser(e)}>
                <span>
                    <LoginInput
                        text="Nome"
                        type="text"
                        att="name"
                        useStatesInput = {useStatesInput}
                    />
                    <LoginInput
                        text="Username"
                        type="text"
                        att="username"
                        useStatesInput = {useStatesInput}
                    />
                </span>
                <LoginInput
                    text="Email"
                    type="email"
                    att="email"
                    useStatesInput = {useStatesInput}
                />
                <LoginInput
                    text="Senha"
                    type="password"
                    att="password"
                    useStatesInput = {useStatesInput}
                />
                <LoginInput
                    text="Confirma Senha"
                    type="password"
                    att="confirm"
                    useStatesInput = {useStatesInput}
                />
                <button type='submit' className='submitButton'>Cadastrar</button>
            </form>
            <p>Já possui uma conta? <span className='changeForm' onClick={() => isRegister(false)}>Login</span></p>
        </div>
    )
}