import { useState, useEffect } from 'react';
import { Edit2, Mail, Phone, MapPin, BookOpen, Target, Calendar, Clock, User } from 'lucide-react';
import EditProfileModal from './EditProfileModal';
import { userService } from '../../../service/user.service';

const StudentProfile = ({ profile }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoadingBookings(true);
        const response = await userService.getMyBookings();
        if (response.success) {
          setBookings(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      } finally {
        setLoadingBookings(false);
      }
    };

    fetchBookings();
  }, []);

  // Format ngày sinh
  const formatDate = (dateString) => {
    if (!dateString) return 'Chưa cập nhật';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="card overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-teal-300 relative">
          {/* Nút chỉnh sửa trên background */}
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="absolute top-4 right-4 btn-primary flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 shadow-md"
          >
            <Edit2 size={18} />
            Chỉnh sửa
          </button>
        </div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col items-center -mt-16">
            <img
              src={profile?.avatarUrl || 'https://avatar.iran.liara.run/public'}
              alt={profile?.displayName}
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <div className="mt-3 text-center">
              <h1 className="heading-3">{profile?.displayName}</h1>
              <p className="text-body-sm">Lớp: {profile?.student?.class || 'Sinh viên'}</p>
              <p className="text-body-sm text-gray-500">GPA: {profile?.student?.gpa || 'N/A'}/10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Contact Info */}
        <div className="card">
          <h2 className="heading-4 mb-4">Thông tin liên hệ</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-body">
              <Mail size={20} className="text-green-500 flex-shrink-0" />
              <span className="break-all">{profile?.email}</span>
            </div>
            <div className="flex items-center gap-3 text-body">
              <Phone size={20} className="text-green-500 flex-shrink-0" />
              <span>{profile?.phone || 'Chưa cập nhật'}</span>
            </div>
            <div className="flex items-center gap-3 text-body">
              <Calendar size={20} className="text-green-500 flex-shrink-0" />
              <span>Ngày sinh: {formatDate(profile?.dateOfBirth)}</span>
            </div>
            <div className="flex items-center gap-3 text-body">
              <MapPin size={20} className="text-green-500 flex-shrink-0" />
              <span>Giới tính: {profile?.sex || 'Chưa cập nhật'}</span>
            </div>
          </div>
        </div>

        {/* Student Info */}
        <div className="card">
          <h2 className="heading-4 mb-4">Thông tin sinh viên</h2>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={18} className="text-green-500" />
                <span className="font-medium text-gray-700">Khoa</span>
              </div>
              <p className="text-body ml-6">{profile?.student?.faculty || 'Chưa cập nhật'}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Target size={18} className="text-green-500" />
                <span className="font-medium text-gray-700">Lớp</span>
              </div>
              <p className="text-body ml-6">{profile?.student?.class || 'Chưa cập nhật'}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar size={18} className="text-green-500" />
                <span className="font-medium text-gray-700">Năm học</span>
              </div>
              <p className="text-body ml-6">Năm {profile?.student?.year || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Performance */}
      <div className="card mt-6">
        <h2 className="heading-4 mb-4">Kết quả học tập</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-4xl font-bold text-green-600">{profile?.student?.gpa || 0}</div>
            <div className="text-body-sm mt-1">GPA</div>
            <div className="text-xs text-gray-500 mt-1">/ 10</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-4xl font-bold text-blue-600">{profile?.student?.year || 0}</div>
            <div className="text-body-sm mt-1">Năm học</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">{profile?.status || 'N/A'}</div>
            <div className="text-body-sm mt-1">Trạng thái</div>
          </div>
        </div>
      </div>

      {/* My Bookings */}
      <div className="card mt-6">
        <h2 className="heading-4 mb-4">Lịch đã đặt</h2>
        {loadingBookings ? (
          <div className="text-center py-4">Đang tải lịch...</div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-4 text-gray-500">Chưa có lịch đặt nào.</div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-blue-600 mb-1">
                      {booking.subjectId?.name} ({booking.subjectId?.code})
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <User size={16} />
                      <span>Gia sư: {booking.tutorId?.displayName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span>
                        {booking.slotId ? (
                          <>
                            {new Date(booking.slotId.date).toLocaleDateString('vi-VN')} | {booking.slotId.startTime} - {booking.slotId.endTime}
                          </>
                        ) : (
                          'Thời gian không xác định'
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end justify-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' :
                        booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                          booking.status === 'CANCELLED' ? 'bg-red-100 text-red-700' :
                            'bg-gray-100 text-gray-700'
                      }`}>
                      {booking.status === 'CONFIRMED' ? 'Đã xác nhận' :
                        booking.status === 'PENDING' ? 'Chờ xác nhận' :
                          booking.status === 'CANCELLED' ? 'Đã hủy' : booking.status}
                    </span>
                    {booking.slotId?.location?.type === 'online' ? (
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">Online</span>
                    ) : (
                      <span className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                        Offline: {booking.slotId?.location?.room || 'Chưa cập nhật'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        userType="student"
      />
    </div>
  );
};

export default StudentProfile;