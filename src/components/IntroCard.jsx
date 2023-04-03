import VerifiedIcon from "@mui/icons-material/Verified"

const IntroCard = ({ name }) => {
  return (
    <div className="flex justify-center">
      <section className="w-[22rem] md:w-[30rem] rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-none transition [animation-duration:_6s] hover:shadow-lg">
        <div className="rounded-[10px] bg-white p-4  sm:p-6">
          <div className="flex flex-row items-center">
            <h3 className="mt-0.5 text-3xl font-medium text-gray-900">{name}</h3>
            <span className=" ml-2 flex items-center px-2 p-1 text-xs rounded-full bg-green-100  text-green-600">
              Active
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 flex items-center">
              <VerifiedIcon className="mr-2" />Verified
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntroCard
