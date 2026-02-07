import { useContext } from "react"
import { useLocation, Link } from "wouter"
import Button from "../../common/components/Button"
import { UserContext } from "./../../common/contexts/UserContext"
import "./Header.css"

const Header = () => {
    const {userLoggedIn, setUserLoggedIn} = useContext(UserContext)
    const [location, setLocation] = useLocation()
  
    const handleLougout = () => {
        sessionStorage.removeItem("userLogged");
        setUserLoggedIn(null)
        setLocation("/")
    }

    return (
        <>
            <h1>
                <span className="main-letter">A</span>rt <span className="main-letter">F</span>av<span className="main-letter">A</span>ttack
            </h1>
            <nav>
                {userLoggedIn && (
                    <>
                        <Link href="/artworks"><span className="main-letter">A</span>rtworks</Link>
                        <Link href="/myfavs"><span className="main-letter">M</span>y Favs</Link>
                        <Button onClick={handleLougout} className="btnLogout">Logout</Button>
                    </>
                )}
            </nav>
        </>
    )
}

export default Header
