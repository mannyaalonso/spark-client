import { Nav } from "../components"
import { useEffect, useState } from "react"
import { getUsers } from "../services/user"



const Home = ({ user }) => {
  const [users, setUser] = useState([])

  const getUsersByLocation = async () => {
    const res = await getUsers(
      user?.location?.coordinates[1],
      user?.location?.coordinates[0]
    )
    console.log("RES", res)
  }

  useEffect(() => {
    getUsersByLocation()
  }, [])

  return (
    <>
      <Nav />
    </>
  )
}

export default Home
