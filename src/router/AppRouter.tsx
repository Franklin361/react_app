import { Navigate, Route, Routes } from "react-router"
import { NavBar } from "../components/NavBar"

import { PrestantaionPage } from "../pages/Presentation/PrestantaionPage"
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';


export const AppRouter = () => {
    return (
        <div className="container_app">
            <NavBar />
            <Routes>
                <Route path="/" element={<PrestantaionPage />} />
                <Route path="store" element={<ShoppingPage />} />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </div>
    )
}
