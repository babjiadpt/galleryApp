// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, onChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnail
  const addClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const changeImage = () => {
    onChangeImage(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button " onClick={changeImage}>
        <img
          src={thumbnailUrl}
          alt={`${thumbnailAltText}`}
          className={`${addClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
