import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputCompare() {
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');

  const navigate = useNavigate();
  const handleCompareClick = () => {
    if (country1 && country2) {
      const codeParams1 = country1.toLowerCase();
      const codeParams2 = country2.toLowerCase();
      navigate(`/compare/${codeParams1}/${codeParams2}`); // Use navigate to redirect
    }
  };

  return (
    <div className="flex items-center justify-center h-96">
      <div className="w-full max-w-screen-lg">
        <h1 className="text-center mb-8 text-4xl font-bold text-blue-600">
          Compare
        </h1>
          <div className="grid gap-8 mb-6 md:grid-cols-2 items-center">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country 1
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country 2
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center"
              onClick={handleCompareClick}
            >
              Compare
            </button>
          </div>
      </div>
    </div>
  );
}

export default InputCompare;
