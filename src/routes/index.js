import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import Register from "../pages/Register"

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter