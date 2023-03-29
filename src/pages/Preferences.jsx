import { Virtues, Vitals, Vices, Nav } from "../components"

const Preferences = ({ user, setUser }) => {

  return (
    <>
    <Nav user={user} />
    <Virtues user={user} setUser={setUser} />
      
    </>
  )
}

export default Preferences
