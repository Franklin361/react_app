import { Navigate, Route, Routes } from "react-router"
import { NavBar } from "../components/NavBar"

import { PrestantaionPage } from "../pages/Presentation/PrestantaionPage"

import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../01-LazyLoad/pages'


export const AppRouter = () => {
    return (
        <div className="container_app">
            <NavBar />
            <Routes>
                <Route path="/" element={<PrestantaionPage />} />
                <Route path="lazy1" element={ <LazyLoad1/> } />
                <Route path="lazy2" element={ <LazyLoad2/> } />
                <Route path="lazy3" element={ <LazyLoad3/> } />

                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </div>
    )
}
