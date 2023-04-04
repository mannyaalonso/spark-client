import Input from "./Input"
import { updateUser } from "../services"
import { useState } from "react"
import Location from "./Location"

const Vitals = ({ user, setUser }) => {
  const initialState = {
    first_name: user?.vitals?.first_name,
    age: user?.vitals?.age,
    age_update: user?.vitals?.age_update ? user?.vitals?.age_update : 0
  }

  const initialLocation = {
    location: user?.location,
    location_visibility: user?.location_visibility,
  }

  const [body, setBody] = useState(initialState)
  const [location, setLocation] = useState(initialLocation)
  const [status, setStatus] = useState("")

  const handleUpdate = async () => {
    checkUndefined()
    const res = await updateUser(
      {
        location: { coordinates: location.location, type: "Point" },
        location_visibility: location.location_visibility,
        vitals: body,
      },
      user._id
    )
    if (res.status === 200) {
      setStatus("Your vitals were updated.")
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
  }

  const checkUndefined = () => {
    if (body.first_name === undefined)
      body.first_name = user?.vitals?.first_name
    if (body.age === undefined) body.age = user?.vitals?.age
    if (body.age_update === 0) body.age_update = 1
    if (location.location === undefined) location.location = user?.location.coordinates
    if (location.location_visibility === undefined)
      location.location_visibility = user?.location_visibility
  }

  return (
    user && (
      <section className="bg-gray-100 mt-16">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <p className="text-2xl font-bold text-teal-600">Vitals</p>
                <address className="mt-2 not-italic">
                  A collection of personal and professional details that provide
                  a brief overview of an individual's identity, skills,
                  experience, interests, and background.
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-red p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Input
                  title={"First Name"}
                  field={user?.vitals?.first_name}
                  update={undefined}
                  variables={["first_name", ""]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                />
                <Input
                  title={"Age (You can only update this once)"}
                  field={user?.vitals?.age}
                  update={user?.vitals}
                  variables={["age", ""]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                />
                <Location
                  title={"Location"}
                  field={user?.location}
                  visibility={user?.location_visibility}
                  variables={["location", "location_visibility"]}
                  setLocation={setLocation}
                  location={location}
                />
                <div className="mt-4">
                  <button
                    onClick={handleUpdate}
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Update
                  </button>
                  <h1
                    className={
                      status === "Your vitals were updated."
                        ? "text-green-500 mt-4"
                        : "text-red-400 mt-4"
                    }
                  >
                    {status}
                  </h1>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default Vitals
