import { Nav, ProfileCard } from "../components"

const Profile = ({ user }) => {
  return (
    <>
      <Nav user={user} />
      <div className="h-full w-full flex justify-center items-center flex-col gap-4 fixed mt-16">
        <ProfileCard user={user} />
      </div>
    </>
  )
}

export default Profile
