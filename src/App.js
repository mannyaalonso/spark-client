import { SignUp, SignIn, Welcome, Home, Preferences } from "./pages"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkSession } from "./services";

export default function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await checkSession()
    if (user === "User not authenticated") return
    console.log("USER", user.data)
    setUser(user.data)
  }

   useEffect(() => {
     const token = localStorage.getItem("token")
     if (token) {
       checkToken()
     }
   }, [])

  return (
    <div className="App">
      <Routes>
        {!user && <Route path="/" element={<Welcome />} />}
        {user && <Route path="/" element={<Home user={user} />} />}
        <Route path="/signup" element={<SignUp user={user} />} />
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/preferences"
          element={<Preferences user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  )
}
