import { Navigate, Route, Routes } from "react-router"
import { NavBar } from "../components/NavBar"

import { PrestantaionPage } from "../pages/Presentation/PrestantaionPage"
import { UserPage } from "../pages/User/UserPage"


export const AppRouter = () => {
    return (
        <div className="container_app">
            <NavBar />
            <Routes>
                <Route path="/" element={<PrestantaionPage />} />
                <Route path="other" element={<UserPage />} />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </div>
    )
}
