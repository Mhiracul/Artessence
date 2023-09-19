import PropTypes from "prop-types"; // Import PropTypes
import ImageItem from "../component/ImageItem";

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <ImageItem key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}

// Define PropTypes for the 'images' prop
ImageGrid.propTypes = {
  images: PropTypes.array.isRequired, // Define the expected type of 'images' prop
};

export default ImageGrid;
