
import {  NavLink } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";

import logo from "../assets/logo.svg";
import { routes } from "../router/routes";

export const NavBar = () => {

    return (
        <aside className="container_nav">
            <header>
                <img src={logo} alt={logo} width={100} />
                <span>React App</span>
            </header>
            <nav>
                {
                    routes.map(({ name, path }) => (
                        // link_nav
                        <NavLink to={path} end className={ ({ isActive }) => (isActive ? "link_nav active" :  "link_nav" ) } key={path}>
                            <span>{name}</span>
                            <AiOutlineBulb className="icon" />
                        </NavLink>
                    ))
                }
            </nav>
        </aside>
    )
}
