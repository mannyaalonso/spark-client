import { useState } from "react"

const Input = ({
  title,
  field,
  visibility,
  variables,
  setStatus,
  setBody,
  body,
}) => {
  const [checked, setChecked] = useState(visibility)
  const [input, setInput] = useState(field)

  const textChange = (e) => {
    setStatus("")
    setInput(e.target.value)
    setBody({ ...body, [variables[0]]: e.target.value })
  }

  const checkChange = () => {
    setStatus("")
    setChecked(!checked)
    setBody({ ...body, [variables[1]]: !checked })
  }

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {title}
      </label>
      <div className="flex flex-col gap-8 ">
        <div>
          <input
            className="w-96 rounded-lg border-gray-200 p-3 text-sm"
            placeholder={field}
            type="text"
            name={title}
            onChange={textChange}
            value={input}
          />
        </div>
        <div className="relative h-8 flex items-center -mt-4 mb-4">
          <label
            htmlFor={title}
            className="absolute h-8 w-14 cursor-pointer left-0 bottom-0 "
          >
            <input
              type="checkbox"
              id={title}
              className="peer sr-only"
              checked={checked}
              onChange={checkChange}
            />
            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>
            <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
          </label>
          <h1 className="ml-20 text-left">
            {checked ? "Visible on your profile" : "Hidden on your profile"}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Input
