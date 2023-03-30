import { Virtues, Vitals, Vices, Nav } from "../components"

const Preferences = ({ user, setUser }) => {

  return (
    <>
    <Nav user={user} />
    <Vitals user={user} setUser={setUser} />
    <Virtues user={user} setUser={setUser} />
    <Vices user={user} setUser={setUser} />
    </>
  )
}

export default Preferences
