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
  status
}) => {

  return (
    user && (
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <p className="text-2xl font-bold text-teal-600">Pictures</p>
                <address className="mt-2 not-italic">
                  Your photos are probably feeling a bit lonely in the dark
                  abyss of your storage. Why not show them some love and
                  upload them so they can frolic with other
                  digital delights?
                </address>
              </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
              <section className="space-y-4">
                <Uploader
                  imageArray={imageArray}
                  handleChange={handleChange}
                  images={user.images}
                  percent={percent}
                />
                <div className="mt-4 flex gap-4 items-center">
                  {percent !== 0 && percent !== 100 && (
                    <h1 className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                      {percent}%
                    </h1>
                  )}
                </div>
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
