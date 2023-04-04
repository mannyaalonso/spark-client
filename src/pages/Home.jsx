import { Nav, ProfileCard } from "../components"
import { useEffect, useState } from "react"
import { getUsers } from "../services/user"
import CloseIcon from "@mui/icons-material/Close"
import ReactPaginate from "react-paginate"

const Home = ({ setUser, user }) => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const PER_PAGE = 1
  const offset = currentPage * PER_PAGE
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((user) => (
      <ProfileCard key={user.properties.id} user={user.properties} />
    ))
  const pageCount = Math.ceil(data.length / PER_PAGE)

  const getUsersByLocation = async () => {
    const res = await getUsers(
      user?.location?.coordinates[1],
      user?.location?.coordinates[0]
    )
    console.log("RES", res)
    if (res !== undefined) setData(res.data.features)
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  useEffect(() => {
    getUsersByLocation()
  }, [])

  return (
    <>
      <Nav setUser={setUser} />
      {data && user?.vitals && (
        <div className="h-full mt-16">
          <div className="h-full w-full flex justify-center items-center flex-col gap-4 fixed">
            {currentPageData}
          </div>
          <div className="bg-blue-400 ml-4 mb-4">
            <ReactPaginate
              previousLabel={""}
              nextLabel={"→"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              previousClassName={"previousClassName"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
