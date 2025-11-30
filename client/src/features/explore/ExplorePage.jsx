import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { getMockSubjects } from "./data/mockdata.js";
import SubjectCard from "./components/SubjectCard";

const ExplorePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [subjects] = useState(getMockSubjects());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("Tất cả khoa");
  const [selectedFormat, setSelectedFormat] = useState("Tất cả");

  const handleSubjectClick = (subject) => {
    navigate(`/explore/${subject.id}`);
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFaculty === "Tất cả khoa" ||
        subject.department === selectedFaculty) &&
      (selectedFormat === "Tất cả" || subject.format === selectedFormat)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Khám Phá Môn Học
        </h1>
        <p className="text-gray-600">
          Tìm kiếm và lựa chọn môn học phù hợp với nhu cầu của bạn tại HCMUT
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm môn học..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <div className="relative min-w-[200px]">
              <select
                className="w-full appearance-none px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all cursor-pointer"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                <option>Tất cả khoa</option>
                <option>Khoa Khoa học & Kỹ thuật Máy tính</option>
                <option>Khoa Cơ khí</option>
                <option>Khoa Điện - Điện tử</option>
                <option>Khoa Xây dựng</option>
                <option>Khoa Khoa học Ứng dụng</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>

            <div className="relative min-w-[150px]">
              <select
                className="w-full appearance-none px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all cursor-pointer"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option>Tất cả</option>
                <option>Trực tuyến</option>
                <option>Trực tiếp</option>
                <option>Kết hợp</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Tìm thấy{" "}
          <span className="font-semibold text-sky-600">
            {filteredSubjects.length}
          </span>{" "}
          môn học
        </p>
      </div>

      {/* Subject Grid */}
      {filteredSubjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={() => handleSubjectClick(subject)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Không tìm thấy môn học phù hợp
          </h3>
          <p className="text-gray-500">
            Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
          </p>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
