import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import PropTypes from "prop-types";
import imageNames from "../data";
import { css } from "@emotion/react";
import { PacmanLoader } from "react-spinners"; // Import the spinner component

const Gallery = () => {
  const [images, setImages] = useState(imageNames);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const ItemTypes = {
    IMAGE: "image",
  };

  useEffect(() => {
    setLoading(true); // Set loading state to true when searching

    // Simulate loading delay (replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading state to false after a delay (e.g., fetching images)
    }, 5000); // Adjust the delay as needed

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [searchTerm]); // Run this effect whenever searchTerm changes

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
      options: {
        // Set a threshold for movement before drag starts (adjust as needed)
        clickTolerance: 30, // Adjust this value as needed
      },
    });

    const [, drop] = useDrop({
      accept: ItemTypes.IMAGE,
      drop: (item) => handleDrop(item.id, image.id),
    });

    return (
      <div
        ref={(node) => ref(drop(node))}
        className="draggable-item relative rounded-lg shadow-md bg-white"
      >
        <img
          src={image.image}
          alt={image.name}
          className="w-full h-96 rounded"
        />
        <p className="absolute top-2 right-2 text-white bg-black bg-opacity-75 px-2 py-0.5 shadow-md shadow-[#ccc] text-xs rounded-full">
          {image.tags}
        </p>
      </div>
    );
  };
  const backend =
    "ontouchstart" in window || navigator.maxTouchPoints
      ? TouchBackend
      : HTML5Backend;

  // Filter images based on search term
  const filteredImages = searchTerm
    ? images.filter((image) => image.tags.includes(searchTerm))
    : images;

  return (
    <>
      <DndProvider backend={backend}>
        <div className="bg-[#2b2b2b]">
          <div className=" container mx-auto py-6 px-6">
            <input
              type="text"
              placeholder="Search by tag"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-1 text-sm outline-none  rounded-lg w-full"
            />
          </div>

          {loading ? (
            // Display the loading spinner when loading is true
            <div className="flex justify-center  h-screen">
              <PacmanLoader color="#FF0000" loading={loading} css={override} />
            </div>
          ) : (
            // Display all images or filtered images with drag-and-drop functionality
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-2 px-6 gap-10">
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
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

Gallery.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Gallery;
