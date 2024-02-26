import { Link } from "react-router-dom";
const home = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Welcome to Our Library Management System</h1>
        <p className="mb-8 text-lg text-gray-600">Explore our vast collection of books and manage your reading list with ease.</p>
        <div className="flex justify-center">
          <Link to="/add" className="px-6 py-3 mr-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Get Started</Link>
          <button className="px-6 py-3 font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default home;
