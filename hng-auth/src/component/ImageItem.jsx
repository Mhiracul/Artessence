import PropTypes from "prop-types"; // Import PropTypes

import { Draggable } from "react-beautiful-dnd";

function ImageItem({ image, index }) {
  return (
    <Draggable draggableId={image.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="image-item"
        >
          <img src={image.url} alt={image.name} />
          <div className="image-tag">{image.tag}</div>
        </div>
      )}
    </Draggable>
  );
}

// Define PropTypes for the 'image' and 'index' props
ImageItem.propTypes = {
  image: PropTypes.object.isRequired, // Define the expected shape of 'image' prop
  index: PropTypes.number.isRequired, // Define the expected type of 'index' prop
};

export default ImageItem;
