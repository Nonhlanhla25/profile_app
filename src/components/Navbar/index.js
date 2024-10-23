import './index.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => (

    <header>
        <div className='nav-bar'>
            <nav>
                <NavLink exact="true" activeclassname="active" className="navbar-link" to="/">Home</NavLink>
                <NavLink exact="true" activeclassname="active" className="navbar-link" to="/about">About Me</NavLink>
                <NavLink exact="true" activeclassname="active" className="navbar-link" to="/projects">Projects</NavLink>
            </nav>

        </div>
    </header>
)

export default Navbar