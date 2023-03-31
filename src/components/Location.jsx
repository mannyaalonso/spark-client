import { useState, useEffect } from "react"

const Location = ({
  title,
  visibility,
  setLocation,
  location,
}) => {

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        ...location,
        location_visibility: true,
        location: [position.coords.longitude, position.coords.latitude],
      })
    })
  }

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {title}
      </label>
      <div className="flex flex-row gap-8 ">
        <div className="flex flex-row">
          <h1
            className={`w-44 rounded-lg border-gray-200 p-3 text-sm ${
              visibility ? "text-green-500" : "text-red-600"
            }`}
          >
            {visibility ? "Location Enabled" : "Location Disabled"}
          </h1>
          <button
            onClick={handleLocation}
            className="w-24 rounded-lg bg-black px-5 py-1 font-medium text-white sm:w-auto"
          >
            Get Location
          </button>
        </div>
      </div>
    </div>
  )
}

export default Location
