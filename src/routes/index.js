import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "../pages/Landing"
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Register from "../pages/Register"

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Landing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter