import { prompts } from "../data"
import { Dropdown } from "flowbite-react"

const DropDownInput = ({ field, variable, body, setBody }) => {
  const handleClick = (title) => {
    setBody({ ...body, [variable]: title })
  }

  return (
    <div className="flex items-center gap-4">
      {field ? <h1>{field}</h1> : <h1>{body[variable]}</h1>}
      <Dropdown className="bg-transparent" label={body[variable]}>
        {prompts.about.map((item) => (
          <>
            <Dropdown.Item
              key={item.id}
              onClick={() => handleClick(item.title)}
            >
              {item.title}
            </Dropdown.Item>
          </>
        ))}
      </Dropdown>
    </div>
  )
}

export default DropDownInput
