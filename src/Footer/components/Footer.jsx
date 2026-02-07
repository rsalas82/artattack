import GithubIcon from "./../../common/assets/github.svg?react"
import LinkedInIcon from "./../../common/assets/linkedIn.svg?react"
import CopyrightIcon from "./../../common/assets/copyright.svg?react"
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="Footer">
            <div className="social-network">
                <ul>
                    <li>
                        <a href="https://github.com/rsalas82" alt="Github">
                            <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rsalasr/" alt="LinkedIn">
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="developedBy">
                <CopyrightIcon />
                {" "}
                Developed by Rafael Salas Robledo
            </div>
        </div>
        </>
    )
}

export default Footer
