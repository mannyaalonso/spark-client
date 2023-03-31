import { Virtues, Vitals, Vices, Nav, Pictures } from "../components"

const Profile = ({ user, setUser, handleChange, handleUpload, file, percent, imageArray, status }) => {
  return (
    <>
      <Nav user={user} />
      <Vitals user={user} setUser={setUser} />
      <Pictures
        user={user}
        setUser={setUser}
        handleChange={handleChange}
        handleUpload={handleUpload}
        file={file}
        percent={percent}
        imageArray={imageArray}
        status={status}
      />
      <Virtues user={user} setUser={setUser} />
      <Vices user={user} setUser={setUser} />
    </>
  )
}

export default Profile
