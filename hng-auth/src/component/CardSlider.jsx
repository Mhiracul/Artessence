import imageNames from "../data";

function App() {
  return (
    <div className="items-center right-0 bottom-0 absolute py-2 px-3   h-96 w-96">
      <div className="flex flex-col items-center justify-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {imageNames.map((item) => (
            <img
              key={item.id}
              className="md:w-[220px] md:h-60 h-32 w-32 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-lg"
              src={item.image}
              alt="/"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
