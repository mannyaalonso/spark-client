import React from "react"
import LikeButton from "./LikeButton"

const PromptCard = ({ prompt, answer}) => {
  return (
    <div className="flex justify-center relative">
      <section className="w-[22rem] md:w-[30rem] rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-none transition [animation-duration:_6s] hover:shadow-lg">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 pb-20">
          <h1 className="block text-lg text-gray-500">
            {prompt}
          </h1>

          <h3 className="mt-0.5 text-3xl font-medium text-gray-900 mb-4">
            {answer}
          </h3>
        </div>
        <LikeButton />
      </section>
    </div>
  )
}

export default PromptCard
