import { Navigate, Route, Routes } from "react-router"
import { NavBar } from "../components/NavBar"

import { PrestantaionPage } from "../pages/Presentation/PrestantaionPage"
import { 
    FormikAbstractation,
    FormikBasicPage,
    FormikComponentsPage,
    FormikYupPage,
    RegisterPage 
} from '../03-forms/pages';


export const AppRouter = () => {
    return (
        <div className="container_app">
            <NavBar />
            <Routes>
                <Route path="/" element={<PrestantaionPage />} />
                <Route path="registro" element={<RegisterPage />} />
                <Route path="formik-basic" element={<FormikBasicPage />} />
                <Route path="formik-yup" element={<FormikYupPage />} />
                <Route path="formik-component" element={<FormikComponentsPage />} />
                <Route path="formik-abstractation" element={<FormikAbstractation />} />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </div>
    )
}
