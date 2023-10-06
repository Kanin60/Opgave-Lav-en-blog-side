import style from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {

    const activeStyle = ({ isActive }) => { return { color: isActive ? "#FFF7E7" : "", textDecoration: isActive ? "underline" : "" } }

    return (
        <nav className={style.navigation}>
            <ul>
                <NavLink to="/" style={activeStyle}>Home</NavLink>
                <NavLink to="/blogs" style={activeStyle}>Blog</NavLink>
                <NavLink to="/search" style={activeStyle}>Søg</NavLink>
            </ul>
        </nav>
    )
}