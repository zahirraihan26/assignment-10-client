import { FaFilm, FaStar, FaChartLine } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="bg-[#232837] py-12 flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl px-6">
        {/* Card 1 */}
        <div className="flex-1 bg-[#232837] rounded-2xl border border-gray-600 flex flex-col items-center py-10 shadow-lg">
          <FaFilm className="text-5xl text-red-400 mb-4" />
          <div className="text-4xl font-bold text-yellow-400 mb-1">0</div>
          <div className="text-gray-300 text-lg">Total Movies</div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-[#232837] rounded-2xl border border-gray-600 flex flex-col items-center py-10 shadow-lg">
          <FaStar className="text-5xl text-red-400 mb-4" />
          <div className="text-4xl font-bold text-yellow-400 mb-1">0</div>
          <div className="text-gray-300 text-lg">Highest Rated</div>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-[#232837] rounded-2xl border border-gray-600 flex flex-col items-center py-10 shadow-lg">
          <FaChartLine className="text-5xl text-red-400 mb-4" />
          <div className="text-4xl font-bold text-yellow-400 mb-1">0</div>
          <div className="text-gray-300 text-lg">total users</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
