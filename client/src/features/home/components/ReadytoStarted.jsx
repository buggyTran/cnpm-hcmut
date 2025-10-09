const ReadytoStarted = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col gap-9 px-4 sm:px-6 lg:px-8 justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Sẵn Sàng Bắt Đầu?
        </h2>
        <p className="text-lg max-w-2xl leading-relaxed">
          Tham gia cùng hàng nghìn sinh viên của Đại Học Bách Khoa TPHCM.
          Kết nối bất kỳ giảng viên nào bạn mong muốn.
        </p>
        <button className="bg-white text-sky-500 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Bắt đầu ngay
        </button>
      </div>
    </section>
  )
}

export default ReadytoStarted
