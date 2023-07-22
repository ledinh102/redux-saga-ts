import { useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import cityApi from "./api/cityApi"
import LoginPage from "@/features/auth/pages/LoginPage"
import { AdminLayout } from "@/components/Layout"
import { NotFound, PrivateRoute } from "@/components/Common"

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => {
      console.log(res)
    })
  })

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <PrivateRoute path="/admin" element={<AdminLayout />} /> */}
      <Route path="/admin" element={<PrivateRoute />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
