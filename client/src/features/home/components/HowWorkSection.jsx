const featuresData = [
  {
    title: 'Đăng ký chương trình',
    description: 'Đăng ký nhu cầu học tập trong kỳ tới của bạn.'
  },
  {
    title: 'Khám phá môn học',
    description: 'Khám phá và lựa chọn các môn học được mở phù hợp.'
  },
  {
    title: 'Kết nối giảng viên',
    description: 'Kết nối trực tiếp đến giảng viên để được giải đáp.'
  }
]


const HowWork = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 py-3">
        {/* Khối Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Cách thức hoạt động
          </h2>
          <p className="text-lg text-gray-500">
            Quy trình đơn giản nhưng hiệu quả
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {
            featuresData.map((feature, index) => {
              return (
                <div key={index} className="pb-24">

                  {/* Number Badge */}
                  <div className="bg-sky-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold mb-6 mx-auto shadow-lg">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold text-gray-800 mb-2 '>
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {feature.description}
                  </p>

                </div>
              )

            })
          }

        </div>

      </div>

    </section>
  )
}

export default HowWork
