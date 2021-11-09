
import { Link, useLocation } from "react-router-dom";
import { AiOutlineBulb } from "react-icons/ai";

import logo from "../assets/logo.svg";

export const NavBar = () => {

    const { pathname } = useLocation();

    const activeClass = (path: string) => {
        const pathWithoutSlash = pathname.split('/')[1];
        if (path === pathWithoutSlash) return 'active';
    };

    return (
        <aside className="container_nav">
            <header>
                <img src={logo} alt={logo} width={100} />
                <span>React App</span>
            </header>
            <nav>
                <Link to="lazy1" className={`link_nav ${activeClass('other')}`} >
                    <span>Lazy 01</span>
                    <AiOutlineBulb className="icon" />
                </Link>
                <Link to="lazy2" className={`link_nav ${activeClass('other')}`} >
                    <span>Lazy 02</span>
                    <AiOutlineBulb className="icon" />
                </Link>
                <Link to="lazy3" className={`link_nav ${activeClass('other')}`} >
                    <span>Lazy 03</span>
                    <AiOutlineBulb className="icon" />
                </Link>
            </nav>
        </aside>
    )
}
