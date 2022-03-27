import { useEffect, useState } from "react"
import TextField from "./../../common/components/TextField"
import Button from "./../../common/components/Button"
import "./Login.css"
import { useLocation } from "wouter"

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [users, setUsers] = useState([])
    const [showError, setShowError] = useState(false);
    const [location, setLocation] = useLocation()

    useEffect(() => {
        const userLogged = sessionStorage.getItem("userLogged")
        if (userLogged) {
            setLocation("/artworks")
        }
        const users = JSON.parse(localStorage.getItem("users"))
        setUsers(users)
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const existUser = users.find(user => user.username === username && user.password === password)
        if (existUser) {
            sessionStorage.setItem("userLogged", username)
            setShowError(false)
            setLocation("/artworks")
        } else {
            setShowError(true)
        }
        
    }

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    return (
        <>
            <div className="Login">
                {showError && <div className="error-msg">Username and/or password are not correct</div>}
                <form onSubmit={handleSubmit}>
                    <TextField id="username" type="text" label="Username" onChange={handleUsernameChange} />
                    <TextField id="password" type="password" label="Password" onChange={handlePasswordChange} />
                    <Button disabled={!username || !password}>Access</Button>
                </form>
            </div>
        </>
    )
}

export default Login