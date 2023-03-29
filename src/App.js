import { SignUp, SignIn, Welcome, Vitals, Virtues, Vices } from "./pages"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkSession } from "./services";
import { Nav } from "./components";

export default function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await checkSession()
    setUser(user)
  }

   useEffect(() => {
     const token = localStorage.getItem("token")
     if (token) {
       checkToken()
     }
   }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        {!user && <Route path="/" element={<Welcome />} />}
        {user && <Route path="/" element={<Virtues user={user} />} />}
        <Route path="/signup" element={<SignUp user={user} />} />
        <Route path="/signin" element={<SignIn user={user} setUser={setUser} />} />
      </Routes>
    </div>
  )
}
