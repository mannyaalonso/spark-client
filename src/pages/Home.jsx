import { Nav, ProfileCard } from "../components"
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
    setUser(res.data.features)
  }

  useEffect(() => {
    getUsersByLocation()
  }, [])

  return users && (
    <>
      <Nav />
      <div className="h-full w-full flex justify-center items-center flex-col gap-4">
        {users.map((user) => (
          <ProfileCard key={user.properties.id} user={user.properties} />
        ))}
      </div>
    </>
  )
}

export default Home
