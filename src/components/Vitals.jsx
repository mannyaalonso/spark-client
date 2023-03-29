import Input from "./Input"

const Vitals = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Hey Manny, looks like we have some things to learn about you.
            </p>

            <div className="mt-8">
              <p className="text-2xl font-bold text-pink-600">
                Vitals
              </p>

              <address className="mt-2 not-italic">
                Please fill out the following
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 flex-row">
            <form action="" className="space-y-4">
              <Input field={"First Name"} />
              <Input field={"Last Name"} />
              <Input field={"Age"} />
              <div className="mt-4">
                <button
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vitals
