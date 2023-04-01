import Input from "./Input"
import { updateUser } from "../services"
import { useState } from "react"

const Vices = ({ user, setUser }) => {
  let initialState = {
    drinking: user?.vices?.drinking,
    drinking_visibility: user?.vices?.drinking_visibility,
    smoking: user?.vices?.smoking,
    smoking_visibility: user?.vices?.smoking_visibility,
    marijuana: user?.vices?.marijuana,
    marijuana_visibility: user?.vices?.marijuana_visibility,
    drugs: user?.vices?.drugs,
    drugs_visibility: user?.vices?.drugs_visibility,
  }

  const [body, setBody] = useState(initialState)
  const [status, setStatus] = useState("")

  const handleUpdate = async () => {
    checkUndefined()
    const res = await updateUser({ vices: body }, user._id)
    if (res.status === 200) {
      setStatus("Your vices were updated.")
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
  }

  const checkUndefined = () => {
    if (body.drinking === undefined) body.drinking = user?.vices?.drinking
    if (body.drinking_visibility === undefined)
      body.drinking_visibility = user?.vices?.drinking_visibility
    if (body.smoking === undefined) body.smoking = user?.vices?.smoking
    if (body.smoking_visibility === undefined)
      body.smoking_visibility = user?.vices?.smoking_visibility
    if (body.marijuana === undefined) body.marijuana = user?.vices?.marijuana
    if (body.marijuana_visibility === undefined)
      body.marijuana_visibility = user?.vices?.marijuana_visibility
    if (body.drugs === undefined) body.drugs = user?.vices?.drugs
    if (body.drugs_visibility === undefined)
      body.drugs_visibility = user?.vices?.drugs_visibility
  }

  return (
    user && (
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <p className="text-2xl font-bold text-teal-600">Vices</p>
                <address className="mt-2 not-italic">
                  Yes, No, Sometimes
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Input
                  title={"Drinking"}
                  field={user?.vices?.drinking}
                  visibility={user?.vices?.drinking_visibility}
                  variables={["drinking", "drinking_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={0}
                />
                <Input
                  title={"Smoking"}
                  field={user?.vices?.smoking}
                  visibility={user?.vices?.smoking_visibility}
                  variables={["smoking", "smoking_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={0}
                />
                <Input
                  title={"Marijuana"}
                  field={user?.vices?.marijuana}
                  visibility={user?.vices?.marijuana_visibility}
                  variables={["marijuana", "marijuana_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={0}
                />
                <Input
                  title={"Drugs"}
                  field={user?.vices?.drugs}
                  visibility={user?.vices?.drugs_visibility}
                  variables={["drugs", "drugs_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={0}
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
                      status === "Your vices were updated."
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

export default Vices
