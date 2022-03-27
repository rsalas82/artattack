import { useEffect, useState } from "react"
import { useLocation } from "wouter"
import { Link } from "wouter"
import Button from "../../common/components/Button"
import "./Header.css"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [location, setLocation] = useLocation()
    
    useEffect(() => {
        const userId = sessionStorage.getItem("userLogged")
        setIsLoggedIn(userId ? true : false)
    }, [])

    const handleLougout = () => {
        sessionStorage.removeItem("userLogged");
        setIsLoggedIn(false)
        setLocation("/")
    }

    return (
        <>
            <h1><span className="main-letter">A</span>aaaaaart <span className="main-letter">A</span>ttack</h1>
            <nav>
                <Link href="/"><span className="main-letter">H</span>ome</Link>
                {isLoggedIn && (
                    <>
                        <Link href="/artworks"><span className="main-letter">A</span>rtworks</Link>
                        <Button onClick={handleLougout} className="btnLogout">Logout</Button>
                    </>
                )}
            </nav>
        </>
    )
}

export default Header