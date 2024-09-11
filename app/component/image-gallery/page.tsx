import { Search, Upload } from "lucide-react";

const ImageGalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navbar */}
        <nav className="mb-8">
          <ul className="flex justify-center sm:justify-start gap-6 text-sm font-medium text-gray-500">
            {["Vectors", "Illustrations", "Images", "Icons"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header content */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            Image Gallery
          </h1>
          <div className="flex items-center">
            <div className="relative">
              <input
                placeholder="Search images..."
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <button className="ml-4 bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition-colors duration-200 flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </button>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 32 }).map((_, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://picsum.photos/400/400?random=${index}`}
                  alt={`Random image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryPage;
