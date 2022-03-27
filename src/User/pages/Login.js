import { useContext, useState } from "react"
import { useLocation } from "wouter"
import TextField from "../../common/components/TextField"
import Button from "../../common/components/Button"
import { userMockAuthenticate } from "../services/userAthenticate.service"
import { UserContext } from "./../../common/contexts/UserContext"
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {setUserLoggedIn} = useContext(UserContext)
    const [showError, setShowError] = useState(false);
    const [error, setError] = useState();
    const [location, setLocation] = useLocation()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        userMockAuthenticate({username, password})
            .then(response => {
                if (response.data) {
                    sessionStorage.setItem("userLogged", username)
                    setUserLoggedIn(response.data)
                    setShowError(false)
                    setError("")
                    setLocation("/artworks")
                }
            })
            .catch(error => {
                setShowError(true)
                setError(`${error.message}`)
            })        
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
                {showError && <div className="error-msg">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <TextField id="username" type="text" label="username" role="username" onChange={handleUsernameChange} />
                    <TextField id="password" type="password" label="pass" role="password" onChange={handlePasswordChange} />
                    <Button disabled={!username || !password}>Access</Button>
                </form>
            </div>
        </>
    )
}

export default Login