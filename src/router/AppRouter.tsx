import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"

import { PrestantaionPage } from "../pages/Presentation/PrestantaionPage"
import { routes } from "./routes"
import { Loading } from '../01-LazyLoad/components/Loading';


export const AppRouter = () => {


    return (
        <div className="container_app">
            <NavBar />
            <Routes>
                <Route path="/" element={<PrestantaionPage />} />
                {
                    routes.map(({ path, component:Component  }) => (
                        <Route 
                            path={path} 
                            element={
                                <Suspense fallback={<Loading/>}>
                                    <Component />
                                </Suspense>
                            } 
                            key={path} 
                        />
                    ))
                }
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </div>
    )
}
