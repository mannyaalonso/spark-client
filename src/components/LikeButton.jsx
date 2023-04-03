import FavoriteIcon from "@mui/icons-material/Favorite"

const LikeButton = () => {
  return (
    <button className="absolute bottom-4 right-4 border-2 p-2 rounded-full">
      <FavoriteIcon className="text-red-500 " />
    </button>
  )
}

export default LikeButton
