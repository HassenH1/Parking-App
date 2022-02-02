import react from "react";
import "./header.css"


export const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <a href="#">Curb</a>
            </div>
            <nav className="NavBar">
                <div className="NavMenu">
                    <ul className="NavLink">
                        <li className="links"><a href="#">Home</a></li>
                        <li className="links"><a href="#">Booking</a></li>
                        <li className="links"><a href="#">Become a Host</a></li>
                        <li className="links"><a href="#">Help</a></li>
                        <li className="links"><a href="#">Login</a></li>
                        <a href="#"><button>Sign up</button></a>
                    </ul>
                </div>
            </nav>

        </header>
    )
}


