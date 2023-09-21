import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from "prop-types";
import imageNames from "../data";
import Banner from "../component/Banner";
const Gallery = () => {
  const [images, setImages] = useState(imageNames);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const ItemTypes = {
    IMAGE: "image",
  };

  useEffect(() => {
    // Simulate loading delay (replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading state to false after a delay (e.g., fetching images)
    }, 2000); // Adjust the delay as needed

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Run this effect only once when the component mounts

  const handleDrop = (draggedImageId, droppedImageId) => {
    const updatedImages = [...images];
    const draggedImageIndex = updatedImages.findIndex(
      (img) => img.id === draggedImageId
    );
    const droppedImageIndex = updatedImages.findIndex(
      (img) => img.id === droppedImageId
    );

    if (draggedImageIndex !== -1 && droppedImageIndex !== -1) {
      const [draggedImage] = updatedImages.splice(draggedImageIndex, 1);
      updatedImages.splice(droppedImageIndex, 0, draggedImage);
      setImages(updatedImages);
    }
  };

  const DraggableImage = ({ image }) => {
    const [, ref] = useDrag({
      type: ItemTypes.IMAGE,
      item: { id: image.id },
    });

    const [, drop] = useDrop({
      accept: ItemTypes.IMAGE,
      drop: (item) => handleDrop(item.id, image.id),
    });

    return (
      <div
        ref={(node) => ref(drop(node))}
        className="draggable-item rounded-lg shadow-lg p-4 bg-white"
      >
        <img
          src={image.image}
          alt={image.name}
          className="w-full h-60 rounded"
        />
        <p>{image.tags}</p>
      </div>
    );
  };

  // Filter images based on search term
  const filteredImages = searchTerm
    ? images.filter((image) => image.tags.includes(searchTerm))
    : images;

  return (
    <>
      <Banner />
      <DndProvider backend={HTML5Backend}>
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by tag"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          {loading ? (
            // Display a loading state when loading is true
            <div className="loader">Loading...</div>
          ) : (
            // Display all images or filtered images with drag-and-drop functionality
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <DraggableImage key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      </DndProvider>
    </>
  );
};

Gallery.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Gallery;
