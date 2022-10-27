import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SetupRouter