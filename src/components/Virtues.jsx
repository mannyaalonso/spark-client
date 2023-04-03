import Input from "./Input"
import { updateUser } from "../services"
import { useState } from "react"

const Virtues = ({ user, setUser }) => {
  const initialState = {
    work: user?.virtues?.work,
    work_visibility: user?.virtues?.work_visibility,
    job_title: user?.virtues?.job_title,
    job_title_visibility: user?.virtues?.job_title_visibility,
    school: user?.virtues?.school,
    school_visibility: user?.virtues?.school_visibility,
    hometown: user?.virtues?.hometown,
    hometown_visibility: user?.virtues?.hometown_visibility,
  }

  const [body, setBody] = useState(initialState)
  const [status, setStatus] = useState("")

  const handleUpdate = async () => {
    checkUndefined()
    const res = await updateUser({ virtues: body }, user._id)
    if (res.status === 200) {
      setStatus("Your virtues were updated.")
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
  }

  const checkUndefined = () => {
    if (body.work === undefined) body.work = user?.virtues?.work
    if (body.work_visibility === undefined)
      body.work_visibility = user?.virtues?.work_visibility
    if (body.job_title === undefined) body.job_title = user?.virtues?.job_title
    if (body.job_title_visibility === undefined)
      body.job_title_visibility = user?.virtues?.job_title_visibility
    if (body.school === undefined) body.school = user?.virtues?.school
    if (body.school_visibility === undefined)
      body.school_visibility = user?.virtues?.school_visibility
    if (body.hometown === undefined) body.hometown = user?.virtues?.hometown
    if (body.hometown_visibility === undefined)
      body.hometown_visibility = user?.virtues?.hometown_visibility
  }

  return (
    user && (
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <p className="text-2xl font-bold text-teal-600">Virtues</p>
                <address className="mt-2 not-italic">
                  Desirable qualities or characteristics that embody moral
                  excellence and promote ethical behavior in individuals.
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Input
                  title={"Work"}
                  field={user?.virtues?.work}
                  visibility={user?.virtues?.work_visibility}
                  variables={["work", "work_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={undefined}
                />
                <Input
                  title={"Job Title"}
                  field={user?.virtues?.job_title}
                  visibility={user?.virtues?.job_title_visibility}
                  variables={["job_title", "job_title_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={undefined}
                />
                <Input
                  title={"School"}
                  field={user?.virtues?.school}
                  visibility={user?.virtues?.school_visibility}
                  variables={["school", "school_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={undefined}
                />
                <Input
                  title={"Home town"}
                  field={user?.virtues?.hometown}
                  visibility={user?.virtues?.hometown_visibility}
                  variables={["hometown", "hometown_visibility"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={undefined}
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
                      status === "Your virtues were updated."
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

export default Virtues
