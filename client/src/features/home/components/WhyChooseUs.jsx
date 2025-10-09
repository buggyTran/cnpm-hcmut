
import {
  EyeIcon,
  UsersIcon,
  CalendarDaysIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const featuresData = [
  {
    icon: EyeIcon,
    title: 'Có tầm nhìn chiến lược',
    description: 'Giúp bạn xác định mục tiêu rõ ràng và lập kế hoạch hành động.'
  },
  {
    icon: UsersIcon,
    title: 'Đăng ký lớp chuyên môn',
    description: 'Dễ dàng tìm kiếm và đăng ký các lớp học phù hợp với mục tiêu.'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Lịch học linh hoạt',
    description: 'Học theo lịch trình riêng, linh hoạt với mọi thời gian.'
  },
  {
    icon: TrophyIcon,
    title: 'Nền tảng đáng tin cậy',
    description: 'Nền tảng uy tín với đội ngũ giảng viên chuyên nghiệp.'
  }
]


const WhyChooseUs = () => {
  return (
    <section className='bg-gray-50 py-24 mt-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Khối Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tại Sao Chọn Mentor <span className='text-sky-500'>Bridge?</span>
          </h2>
          <p className="text-lg text-gray-500">
            Nền tảng lựa chọn đầu tiên cho sự xuất sắc trong học tập
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            featuresData.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group'
                >
                  {/* Icon */}
                  <div className='w-14 h-14 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors duration-300'>
                    <IconComponent className='w-7 h-7 text-sky-500 group-hover:text-white transition-colors duration-300' />
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
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

export default WhyChooseUs