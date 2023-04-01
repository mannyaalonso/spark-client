import { Oval } from "react-loader-spinner"
import { useState } from "react"
import CheckIcon from "@mui/icons-material/Check"

const Location = ({ title, visibility, setLocation, location }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [locator, setLocator] = useState(false)

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocator(true)
      setIsLoading(false)
      setLocation({
        ...location,
        location_visibility: true,
        location: [position.coords.longitude, position.coords.latitude],
      })
    })
    setLocator(false)
    setIsLoading(true)
  }

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {title}
      </label>
      <div className="flex flex-row gap-8 h-12">
        <div className="flex flex-row items-center">
          <h1
            className={`w-44 rounded-lg border-gray-200 p-3 text-sm ${
              visibility ? "text-green-500" : "text-red-600"
            }`}
          >
            {visibility ? "Location Enabled" : "Location Disabled"}
          </h1>
          <button
            onClick={handleLocation}
            className="w-24 rounded-lg bg-black px-5 py-1 font-medium text-white sm:w-auto mr-4"
          >
            Get Location
          </button>
          {isLoading && (
            <Oval
              height={40}
              width={40}
              color="black"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="white"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          )}
          {locator && <CheckIcon />}
        </div>
      </div>
    </div>
  )
}

export default Location
