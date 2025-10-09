import data from '../../../assets/img/data.png'
import probability from '../../../assets/img/xstk.png'
import calculus from '../../../assets/img/math.png'

const subjectData = [
  {
    img: calculus,
    name: 'Giải tích',
    des: 'Trả lời các thắc mắc, nhu cầu về môn giải tích của bạn'
  },
  {
    img: probability,
    name: 'Xác suất thống kê',
    des: 'Giải đáp, nâng cao khả năng của bạn quanh vấn đề môn học'
  },
  {
    img: data,
    name: 'Cơ sở dữ liệu',
    des: 'Giúp bạn tìm hiểu càng các vấn đề của môn cơ sở dữ liệu'
  }
]

const SubjectSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Môn học phổ biến
          </h2>
          <p className="text-lg text-gray-600">
            Khám phá các môn học được nhiều sinh viên quan tâm nhất
          </p>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectData.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                <img
                  src={subject.img}
                  alt={subject.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-500 transition-colors">
                  {subject.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {subject.des}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>

    </section>
  )
}

export default SubjectSection