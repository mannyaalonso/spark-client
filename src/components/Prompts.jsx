import Dropdown from "./DropdownInput"
import Input from "./Input"
import { updateUser } from "../services"
import { useState } from "react"

const Prompts = ({ user, setUser }) => {
  const initialState = {
    prompt_1: user?.prompts?.prompt_1,
    answer_1: user?.prompts?.prompt_1,
    visible_1: user?.prompts?.prompt_1,
    prompt_2: user?.prompts?.prompt_2,
    answer_2: user?.prompts?.prompt_2,
    visible_2: user?.prompts?.prompt_2,
    prompt_3: user?.prompts?.prompt_3,
    answer_3: user?.prompts?.prompt_3,
    visible_3: user?.prompts?.prompt_3,
  }

  const [body, setBody] = useState(initialState)
  const [status, setStatus] = useState("")

  const handleUpdate = async () => {
    checkUndefined()
    const res = await updateUser({prompts: body}, user._id)
    if (res.status === 200) {
      setStatus("Your prompts were updated.")
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
  }

  const checkUndefined = () => {
    if (body.prompt_1 === undefined) body.prompt_1 = user?.prompts?.prompt_1
    if (body.answer_1 === undefined) body.answer_1 = user?.prompts?.answer_1
    if (body.visible_1 === undefined) body.visible_1 = user?.prompts?.visible_1
    if (body.prompt_2 === undefined) body.prompt_2 = user?.prompts?.prompt_2
    if (body.answer_2 === undefined) body.answer_2 = user?.prompts?.answer_2
    if (body.visible_2 === undefined) body.visible_2 = user?.prompts?.visible_2
    if (body.prompt_3 === undefined) body.prompt_3 = user?.prompts?.prompt_3
    if (body.answer_3 === undefined) body.answer_3 = user?.prompts?.answer_3
    if (body.visible_3 === undefined) body.visible_3 = user?.prompts?.visible_3
  }

  return (
    user && (
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <p className="text-2xl font-bold text-teal-600">Prompts</p>
                <address className="mt-2 not-italic">
                  Get creative and find you the love of your life (or at least a
                  really good first date)!
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Dropdown
                  title="Prompt #1"
                  field={user?.prompts?.prompt_1}
                  variable={"prompt_1"}
                  setBody={setBody}
                  body={body}
                />
                <Input
                  title={"1"}
                  field={user?.prompts?.answer_1}
                  visibility={user?.prompts?.visible_1}
                  variables={["answer_1", "visible_1"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={undefined}
                />
                <Dropdown
                  title="Prompt #2"
                  field={user?.prompts?.prompt_2}
                  variable={"prompt_2"}
                  setBody={setBody}
                  body={body}
                />
                <Input
                  title={"2"}
                  field={user?.prompts?.answer_2}
                  visibility={user?.prompts?.visible_2}
                  variables={["answer_2", "visible_2"]}
                  setStatus={setStatus}
                  setBody={setBody}
                  body={body}
                  update={undefined}
                />
                <Dropdown
                  title="Prompt #3"
                  field={user?.prompts?.prompt_3}
                  variable={"prompt_3"}
                  setBody={setBody}
                  body={body}
                />
                <Input
                  title={"3"}
                  field={user?.prompts?.answer_3}
                  visibility={user?.prompts?.visible_3}
                  variables={["answer_3", "visible_3"]}
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
                      status === "Your prompts were updated."
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

export default Prompts
