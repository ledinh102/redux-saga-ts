import { Navigate } from "react-router-dom"
import { AdminLayout } from "../Layout"

export interface PrivateRouteProps {}

export function PrivateRoute(props: PrivateRouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"))

  return isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />
}
