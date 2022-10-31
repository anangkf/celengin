import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Keinginan from "../pages/Keinginan"
import KeinginanDetail from "../pages/KeinginanDetail"
import Landing from "../pages/Landing"
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Register from "../pages/Register"
import PrivateRoute from "./PrivateRoute"
import ProtectedRoute from "./ProtectedRoute"

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="keinginan" element={<Keinginan />} />
          <Route path="keinginan/:id" element={<KeinginanDetail />} />
        </Route>
        <Route path='/' element={<ProtectedRoute />}>
          <Route index element={<Layout><Landing /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter