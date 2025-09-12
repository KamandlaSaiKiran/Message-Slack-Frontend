import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/Auth/Auth"
import { SigninContainer } from "@/components/organisms/Auth/SigninContainer"
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer"
import { Notfound } from "@/pages/Notfound/Notfound"


export const AppRoutes = ()=>{
    return(
      
        <Routes>
              <Route path="/auth/signup" element={<Auth><SignupContainer/></Auth>}></Route>
              <Route path="/auth/signin" element={<Auth><SigninContainer/></Auth>}></Route>
              <Route path="/home" element={<Auth><h1>Home</h1></Auth>}></Route>
              <Route path="/*" element={<Notfound/>}></Route>
          </Routes>
  
    )
}