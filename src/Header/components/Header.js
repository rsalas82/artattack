import { Link } from "wouter"
import "./Header.css"

const Header = () => {
    return (
        <>
            <h1><span className="main-letter">A</span>aaaaaart <span className="main-letter">A</span>ttack</h1>
            <nav>
                <Link href="/"><span className="main-letter">H</span>ome</Link>
                <Link href="/artworks"><span className="main-letter">A</span>rtworks</Link>
            </nav>
        </>
    )
}

export default Header