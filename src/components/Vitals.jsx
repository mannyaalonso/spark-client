import Input from "./Input"
import { updateUser } from "../services"
import { useState } from "react"

const Vitals = ({ user, setUser }) => {
  const initialState = {
    first_name: user?.vitals?.first_name,
    name_visibility: user?.vitals?.name_visibility,
    age: user?.vitals?.age,
    age_visibility: user?.vitals?.age_visibility,
    location: user?.vitals?.location,
    location_visibility: user?.vitals?.location_visibility,
  }

  const [body, setBody] = useState(initialState)
  const [status, setStatus] = useState("")

  const handleUpdate = async () => {
    checkUndefined()
    const res = await updateUser({ vitals: body }, user._id)
    if (res.status === 200) {
      setStatus("Your vitals were updated.")
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
  }

  const checkUndefined = () => {
    if (body.first_name === undefined) body.first_name = user?.vitals?.first_name
    if (body.name_visibility === undefined)
      body.name_visibility = user?.vitals?.name_visibility
    if (body.age === undefined) body.age = user?.vitals?.age
    if (body.age_visibility === undefined)
      body.age_visibility = user?.vitals?.age_visibility
    if (body.location === undefined) body.location = user?.vitals?.location
    if (body.location_visibility === undefined)
      body.location_visibility = user?.vitals?.location_visibility
  }

  return (
    user && (
      <section className="bg-gray-100">
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

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Input
                  title={"First Name"}
                  field={user?.vitals?.first_name}
                  visibility={user?.vitals?.name_visibility}
                  variables={["first_name", "name_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                />
                <Input
                  title={"Age"}
                  field={user?.vitals?.age}
                  visibility={user?.vitals?.age_visibility}
                  variables={["age", "age_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                />
                <Input
                  title={"Location"}
                  field={user?.vitals?.location}
                  visibility={user?.vitals?.location_visibility}
                  variables={["location", "location_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
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
