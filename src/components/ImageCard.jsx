import LikeButton from "./LikeButton"

const ImageCard = ({ image }) => {
  return (
    <section className="w-[22rem] md:w-[30rem] flex justify-center relative">
      <img
        alt="Lava"
        src={image}
        className="h-96 w-96 md:w-[30rem] md:h-[30rem] rounded-xl object-cover shadow-none transition hover:shadow-lg"
      />
      <LikeButton />
    </section>
  )
}

export default ImageCard
