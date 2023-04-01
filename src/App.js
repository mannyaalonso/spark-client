import { SignUp, SignIn, Welcome, Home, Preferences, Profile } from "./pages"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { checkSession, updateUser } from "./services"
import storage from "./firebaseConfig"

export default function App() {
  const [user, setUser] = useState(null)
  const [percent, setPercent] = useState(0)
  const [imageArray, setImageUrl] = useState([])
    const [status, setStatus] = useState("")
  let file = ""

  const checkToken = async () => {
    const user = await checkSession()
    if (user === "User not authenticated") return
    setUser(user.data)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  const handleChange = (e, index) => {
    setPercent(0)
    setStatus("")
    file = e.target.files[0]
    handleUpload(index)
  }

  const handleUpload = (index) => {
    if (!file) {
      return alert("Please upload an image first!")
    }

    const randomInt = Math.random()
    const storageRef = ref(
      storage,
      `/images/${user._id.$oid}/${randomInt}${file.name}`
    )

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )

        // update progress
        setPercent(percent)
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // uploadTask.snapshot.ref refers to the image we just uploaded
          const newState = [...imageArray]
          newState[index] = url
          setImageUrl(newState)
          handleUpdate(newState)
        })
      }
    )
  }

  const handleUpdate = async (newState) => {
    checkUndefined(newState)
    const res = await updateUser({ images: newState }, user._id)
    if (res.status === 200) {
      setStatus("Your pictures were updated.")
      setPercent(0)
      return setUser(res.data[0])
    }
    setStatus("Please try again, there was an error.")
    setPercent(0)
  }

  const checkUndefined = (newState) => {
    for (let i = 0; i < user.images.length; i++) {
      if (user.images[i] !== undefined && newState[i] === undefined) {
        newState[i] = user.images[i]
      }
    }
  }

  return (
    <div className="App">
      <Routes>
        {!user && <Route path="/" element={<Welcome />} />}
        {user && <Route path="/" element={<Home user={user} />} />}
        <Route path="/signup" element={<SignUp user={user} />} />
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/preferences"
          element={
            <Preferences
              user={user}
              setUser={setUser}
              handleChange={handleChange}
              handleUpload={handleUpload}
              file={file}
              percent={percent}
              imageArray={imageArray}
              status={status}
            />
          }
        />
        <Route path="/profile" element={ <Profile />} />
      </Routes>
    </div>
  )
}
