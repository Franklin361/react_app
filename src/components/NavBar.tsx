
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
                <Link to="registro" className={`link_nav ${activeClass('other')}`} >
                    <span>Registro</span>
                    <AiOutlineBulb className="icon" />
                </Link>
                <Link to="formik-basic" className={`link_nav ${activeClass('formik-basic')}`} >
                    <span>Formik Basico</span>
                    <AiOutlineBulb className="icon" />
                </Link>
                <Link to="formik-yup" className={`link_nav ${activeClass('formik-yup')}`} >
                    <span>Formik Yup</span>
                    <AiOutlineBulb className="icon" />
                </Link>
                <Link to="formik-component" className={`link_nav ${activeClass('formik-component')}`} >
                    <span>Formik Component</span>
                    <AiOutlineBulb className="icon" />
                </Link>
                <Link to="formik-abstractation" className={`link_nav ${activeClass('formik-abstractation')}`} >
                    <span>Formik Abstractation</span>
                    <AiOutlineBulb className="icon" />
                </Link>
            </nav>
        </aside>
    )
}
