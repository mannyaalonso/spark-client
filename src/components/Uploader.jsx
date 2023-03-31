import { useRef } from "react"

const Uploader = ({ images, handleChange, imageArray }) => {
  
  const image1 = useRef(null)
  const image2 = useRef(null)
  const image3 = useRef(null)
  const image4 = useRef(null)
  const image5 = useRef(null)
  const image6 = useRef(null)

  const handleClick = (div) => {
    if (div === 1) image1.current.click()
    if (div === 2) image2.current.click()
    if (div === 3) image3.current.click()
    if (div === 4) image4.current.click()
    if (div === 5) image5.current.click()
    if (div === 6) image6.current.click()
  }

  return (
    <div className="flex gap-4 flex-wrap">
      <div
        onClick={() => handleClick(1)}
        className="w-40 h-40 bg-slate-600 rounded-lg flex justify-center items-center text-white"
      >
        <input
          style={{ display: "none" }}
          ref={image1}
          accept="image/*"
          type="file"
          onChange={(e) => handleChange(e, 0)}
        />
        {images?.length >= 1 ? (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[0]}
            alt={"1"}
          />
        ) : (
          <h1>No Image</h1>
        )}
      </div>
      <div
        onClick={() => handleClick(2)}
        className="w-40 h-40 bg-slate-600 rounded-lg"
      >
        <input
          style={{ display: "none" }}
          ref={image2}
          accept="image/*"
          type="file"
          onChange={(e) => handleChange(e, 1)}
        />
        {images?.length >= 2 && (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[1]}
            alt={"2"}
          />
        )}
      </div>
      <div
        onClick={() => handleClick(3)}
        className="w-40 h-40 bg-slate-600 rounded-lg"
      >
        <input
          style={{ display: "none" }}
          ref={image3}
          accept="image/*"
          type="file"
          onChange={(e) => handleChange(e, 2)}
        />
        {images?.length >= 3 && (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[2]}
            alt={"3"}
          />
        )}
      </div>
      <div
        onClick={() => handleClick(4)}
        className="w-40 h-40 bg-slate-600 rounded-lg"
      >
        <input
          style={{ display: "none" }}
          ref={image4}
          accept="image/*"
          type="file"
          onChange={(e) => handleChange(e, 3)}
        />
        {images?.length >= 4 && (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[3]}
            alt={"4"}
          />
        )}
      </div>
      <div
        onClick={() => handleClick(5)}
        className="w-40 h-40 bg-slate-600 rounded-lg"
      >
        <input
          style={{ display: "none" }}
          ref={image5}
          accept="image/*"
          type="file"
          onChange={(e) => handleChange(e, 4)}
        />
        {images?.length >= 5 && (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[4]}
            alt={"5"}
          />
        )}
      </div>
      <div
        onClick={() => handleClick(6)}
        className="w-40 h-40 bg-slate-600 rounded-lg"
      >
        <input
          style={{ display: "none" }}
          ref={image6}
          accept="image/*"
          type="file"
          onChange={(e) => handleChange(e, 5)}
        />
        {images?.length >= 6 && (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={images[5]}
            alt={"6"}
          />
        )}
      </div>
    </div>
  )
}

export default Uploader
