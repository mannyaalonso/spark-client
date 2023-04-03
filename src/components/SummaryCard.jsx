import CakeIcon from "@mui/icons-material/Cake"
import FmdGoodIcon from "@mui/icons-material/FmdGood"
import WineBarIcon from "@mui/icons-material/WineBar"
import MedicationIcon from "@mui/icons-material/Medication"
import SchoolIcon from "@mui/icons-material/School"
import BusinessIcon from "@mui/icons-material/Business"
import WorkIcon from "@mui/icons-material/Work"
import HomeIcon from "@mui/icons-material/Home"
import { useState, useEffect } from "react"

const SummaryCard = ({
  age,
  location,
  drinks,
  drugs,
  school,
  work,
  job_title,
  hometown,
}) => {
  const [city, setCity] = useState('')

  const getCity = () => {
    var xhr = new XMLHttpRequest()
    var lat = location?.coordinates[1]
    var lng = location?.coordinates[0]

    // Paste your LocationIQ token below.
    xhr.open(
      "GET",
      `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION}&lat=` +
        lat +
        "&lon=" +
        lng +
        "&format=json",
      true
    )
    xhr.send()
    xhr.onreadystatechange = processRequest
    xhr.addEventListener("readystatechange", processRequest, false)

    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText)
        let city = response.address.city
        setCity(city)
        return
      }
    }
  }

  useEffect(() => {
    getCity()
  },[location])

  return (
    city && (
      <div className="flex justify-center">
        <section className="w-[22rem] md:w-[30rem] rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-none transition [animation-duration:_6s] hover:shadow-lg">
          <div className="rounded-[10px] bg-white p-4  sm:p-6">
            <div className="flex flex-row items-center mb-4 overflow-scroll scrollbar-hide">
              <div className="flex flex-row items-center gap-2">
                <CakeIcon />
                <h1 className="mr-4">{age}</h1>
              </div>
              <div className="flex flex-row items-center gap-2">
                <FmdGoodIcon />
                <h1 className="mr-4">{city}</h1>
              </div>
              <div className="flex flex-row items-center gap-2">
                <WineBarIcon />
                <h1 className="mr-4">{drinks}</h1>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MedicationIcon />
                <h1 className="mr-4">{drugs}</h1>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-2 mb-2">
                <SchoolIcon />
                <h1>{school}</h1>
              </div>
              <div className="flex flex-row items-center gap-2 mb-2">
                <BusinessIcon />
                <h1>{work}</h1>
              </div>
              <div className="flex flex-row items-center gap-2 mb-2">
                <WorkIcon />
                <h1>{job_title}</h1>
              </div>
              <div className="flex flex-row items-center gap-2 mb-2">
                <HomeIcon />
                <h1>{hometown}</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  )
}

export default SummaryCard
