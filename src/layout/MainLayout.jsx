import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { Navigation } from "../components/Navigation/Navigation"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {

    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}