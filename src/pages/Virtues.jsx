import { Input, Checkbox } from "../components"
import { useState, useEffect } from "react"
import { virtues, vitals } from "../data"
import { updateUser } from "../services"

const Virtues = ({ user }) => {
  const initialState = {
    work: user.virtues?.work,
    work_visibility: user.virtues?.work_visibility,
    job_title: user.virtues?.job_title,
    job_title_visibility: user.virtues?.job_title_visibility,
    school: user.virtues?.school,
    school_visibility: user.virtues?.school_visibility,
    hometown: user.virtues?.hometown,
    hometown_visibility: user.virtues?.hometown_visibility
  }

  const [body, setBody] = useState(initialState)

  const handleUpdate = async () => {
    const res = await updateUser({virtues: body}, user._id)
    console.log(res)
  }

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="mt-8">
              <p className="text-2xl font-bold text-pink-600">Virtues</p>
              <address className="mt-2 not-italic">
                Please fill out the following
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
            <section className="space-y-4">
              <Input
                object={"virtues"}
                title={"Work"}
                field={user.virtues?.work}
                visibility={user.virtues?.work_visibility}
                variables={["work", "work_visibility"]}
                setBody={setBody}
                body={body}
              />
              <Input
                object={"virtues"}
                title={"Job Title"}
                field={user.virtues?.job_title}
                visibility={user.virtues?.job_title_visibility}
                variables={["job_title", "job_title_visibility"]}
                setBody={setBody}
                body={body}
              />
              <Input
                object={"virtues"}
                title={"School"}
                field={user.virtues?.school}
                visibility={user.virtues?.school_visibility}
                variables={["school", "school_visibility"]}
                setBody={setBody}
                body={body}
              />
              <Input
                object={"virtues"}
                title={"Home town"}
                field={user.virtues?.hometown}
                visibility={user.virtues?.hometown_visibility}
                variables={["hometown", "hometown_visibility"]}
                setBody={setBody}
                body={body}
              />
              <div className="mt-4">
                <button onClick={handleUpdate} className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                  Update
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Virtues
