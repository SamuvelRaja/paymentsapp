import { Outlet, Navigate } from "react-router-dom";

export default function AuthChecker() {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" />;
    }
    return(
        <Outlet/>
    )
}