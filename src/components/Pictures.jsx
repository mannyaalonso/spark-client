import Uploader from "./Uploader"
import { updateUser } from "../services"
import { useState } from "react"
import Location from "./Location"

const Pictures = ({
  user,
  setUser,
  handleChange,
  handleUpload,
  file,
  percent,
  imageArray,
}) => {
  const [status, setStatus] = useState("")

  const handleUpdate = async () => {
    checkUndefined()
    const res = await updateUser({images: imageArray}, user._id)
    if (res.status === 200) {
      setStatus("Your pictures were updated.")
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
  }

  const checkUndefined = () => {
    for (let i = 0; i < user.images.length; i++) {
      if (user.images[i] !== undefined && imageArray[i] === undefined) {
        imageArray[i] = user.images[i]
      }
    }
  }

  return (
    user && (
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <p className="text-2xl font-bold text-teal-600">Pictures</p>
                <address className="mt-2 not-italic">
                  A collection of personal and professional details that provide
                  a brief overview of an individual's identity, skills,
                  experience, interests, and background.
                </address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Uploader
                  imageArray={imageArray}
                  handleChange={handleChange}
                  images={user.images}
                />
                <div className="mt-4 flex gap-4 items-center">
                  <button
                    onClick={handleUpdate}
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Update
                  </button>
                  <h1>{percent}%</h1>
                </div>
                {file ? <h1>Press update to upload your picture</h1> : <h1>No file chosen</h1>}
                <h1
                  className={
                    status === "Your pictures were updated."
                      ? "text-green-500 mt-4"
                      : "text-red-400 mt-4"
                  }
                >
                  {status}
                </h1>
              </section>
            </div>
          </div>
        </div>
      </section>
    )
  )
}

export default Pictures
