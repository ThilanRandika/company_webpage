import {Link} from 'react-router-dom'
import "../components/styles/NavBarStyles.css"
export const NavBar=()=>{

    return(
        <div className="header">
            <div className="header-logo">
                    <h3>Hydra</h3>
            </div>
            <ul className='nav-bar'>
                <li ><Link className='nav-item' to="/">Home</Link></li>
                <li ><Link className='nav-item' to="/about">About</Link></li>
                <li ><Link className='nav-item' to="/contact">Contact</Link></li>
                <li ><Link className='nav-item' to="/projects">Projects</Link></li>
            </ul>
        </div>
    )
}