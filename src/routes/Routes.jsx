import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/Auth/Auth"
import { SigninContainer } from "@/components/organisms/Auth/SigninContainer"
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer"
import { Notfound } from "@/pages/Notfound/Notfound"
import { ProtectedRoute } from "@/components/molecules/ProtectedRoute/ProtectedRoute"
import { Home } from "@/pages/Home/Home"


export const AppRoutes = ()=>{
    return(
      
        <Routes>
              <Route path="/auth/signup" element={<Auth><SignupContainer/></Auth>}></Route>
              <Route path="/auth/signin" element={<Auth><SigninContainer/></Auth>}></Route>
              <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
              <Route path="/*" element={<Notfound/>}></Route>
          </Routes>
  
    )
}