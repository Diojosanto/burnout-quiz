export const questions = [
  {
    id: 1,
    question: "Bạn có cảm thấy mệt mỏi ngay khi bắt đầu ngày mới?",
    answers: [
      { text: "Không bao giờ", value: { burnout: 0, lazy: 0 } },
      { text: "Hiếm khi", value: { burnout: 1, lazy: 0 } },
      { text: "Thỉnh thoảng", value: { burnout: 2, lazy: 1 } },
      { text: "Thường xuyên", value: { burnout: 3, lazy: 2 } }
    ],
    solution: "Hãy ngủ đủ giấc và hạn chế dùng điện thoại trước khi ngủ."
  },
  {
    id: 2,
    question: "Bạn thấy khó bắt đầu công việc dù biết mình cần làm?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Đôi lúc", value: { burnout: 1, lazy: 1 } },
      { text: "Khá thường", value: { burnout: 2, lazy: 2 } },
      { text: "Luôn luôn", value: { burnout: 2, lazy: 3 } }
    ],
    solution: "Chia nhỏ công việc thành bước nhỏ để dễ bắt đầu."
  },
  {
    id: 3,
    question: "Bạn có cảm thấy mất động lực học tập hoặc làm việc?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Thỉnh thoảng", value: { burnout: 1, lazy: 1 } },
      { text: "Thường xuyên", value: { burnout: 2, lazy: 1 } },
      { text: "Gần như luôn", value: { burnout: 3, lazy: 2 } }
    ],
    solution: "Đặt mục tiêu nhỏ mỗi ngày để tạo cảm giác hoàn thành."
  },
  {
    id: 4,
    question: "Bạn cảm thấy áp lực khi nghĩ tới deadline?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Hơi áp lực", value: { burnout: 1, lazy: 0 } },
      { text: "Khá stress", value: { burnout: 2, lazy: 1 } },
      { text: "Stress nặng", value: { burnout: 3, lazy: 1 } }
    ],
    solution: "Lập kế hoạch theo ngày để giảm áp lực dồn việc."
  },
  {
    id: 5,
    question: "Bạn dễ mất tập trung khi làm việc?",
    answers: [
      { text: "Hiếm khi", value: { burnout: 0, lazy: 0 } },
      { text: "Đôi lúc", value: { burnout: 1, lazy: 1 } },
      { text: "Thường xuyên", value: { burnout: 2, lazy: 2 } },
      { text: "Luôn luôn", value: { burnout: 3, lazy: 2 } }
    ],
    solution: "Thử phương pháp Pomodoro 25 phút tập trung."
  },
  {
    id: 6,
    question: "Bạn cảm thấy kiệt sức sau giờ học/làm?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Ít khi", value: { burnout: 1, lazy: 0 } },
      { text: "Khá thường", value: { burnout: 2, lazy: 1 } },
      { text: "Luôn luôn", value: { burnout: 3, lazy: 1 } }
    ],
    solution: "Nghỉ giải lao ngắn giữa các phiên làm việc."
  },
  {
    id: 7,
    question: "Bạn trì hoãn công việc dù vẫn còn thời gian?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Đôi lúc", value: { burnout: 0, lazy: 1 } },
      { text: "Thường xuyên", value: { burnout: 1, lazy: 2 } },
      { text: "Luôn trì hoãn", value: { burnout: 1, lazy: 3 } }
    ],
    solution: "Áp dụng quy tắc 5 phút: làm thử 5 phút trước."
  },
  {
    id: 8,
    question: "Bạn cảm thấy công việc trở nên vô nghĩa?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Hiếm khi", value: { burnout: 1, lazy: 0 } },
      { text: "Thỉnh thoảng", value: { burnout: 2, lazy: 0 } },
      { text: "Thường xuyên", value: { burnout: 3, lazy: 1 } }
    ],
    solution: "Tìm lại mục tiêu dài hạn hoặc ý nghĩa cá nhân."
  },
  {
    id: 9,
    question: "Bạn dễ cáu gắt hơn bình thường?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
      { text: "Khá thường", value: { burnout: 2, lazy: 0 } },
      { text: "Rất thường", value: { burnout: 3, lazy: 0 } }
    ],
    solution: "Thử hít thở sâu hoặc đi bộ ngắn để giảm căng thẳng."
  },
  {
    id: 10,
    question: "Bạn thấy mình thiếu năng lượng kéo dài nhiều ngày?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Thỉnh thoảng", value: { burnout: 1, lazy: 0 } },
      { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
      { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
    ],
    solution: "Kiểm tra lại lịch nghỉ ngơi và chế độ ăn uống."
  },

  // ===== 11 → 30 =====

  {
    id: 11,
    question: "Bạn cảm thấy áp lực kéo dài nhiều tuần?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Ít khi", value: { burnout: 1, lazy: 0 } },
      { text: "Khá thường", value: { burnout: 2, lazy: 0 } },
      { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
    ],
    solution: "Hãy dành thời gian nghỉ dài hơn để phục hồi."
  },
  {
    id: 12,
    question: "Bạn né tránh công việc vì cảm thấy quá tải?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Đôi lúc", value: { burnout: 1, lazy: 1 } },
      { text: "Thường xuyên", value: { burnout: 2, lazy: 2 } },
      { text: "Luôn luôn", value: { burnout: 3, lazy: 2 } }
    ],
    solution: "Giảm khối lượng việc và ưu tiên việc quan trọng."
  },
  {
    id: 13,
    question: "Bạn thấy khó ngủ do suy nghĩ về công việc?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Hiếm khi", value: { burnout: 1, lazy: 0 } },
      { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
      { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
    ],
    solution: "Tạo thói quen thư giãn trước giờ ngủ."
  },
  {
    id: 14,
    question: "Bạn vẫn làm tốt khi có deadline gấp?",
    answers: [
      { text: "Luôn", value: { burnout: 0, lazy: 0 } },
      { text: "Thường", value: { burnout: 0, lazy: 1 } },
      { text: "Khó khăn", value: { burnout: 1, lazy: 1 } },
      { text: "Không thể", value: { burnout: 2, lazy: 2 } }
    ],
    solution: "Luyện thói quen làm sớm để giảm áp lực."
  },
  {
    id: 15,
    question: "Bạn cảm thấy mình cần nghỉ ngơi nghiêm túc?",
    answers: [
      { text: "Không", value: { burnout: 0, lazy: 0 } },
      { text: "Có chút", value: { burnout: 1, lazy: 0 } },
      { text: "Khá cần", value: { burnout: 2, lazy: 0 } },
      { text: "Rất cần", value: { burnout: 3, lazy: 0 } }
    ],
    solution: "Cho bản thân một ngày nghỉ hoàn toàn."
  },

{
  id: 16,
  question: "Bạn cảm thấy mình đang bị quá tải cảm xúc?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
    { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Hãy thử viết nhật ký hoặc chia sẻ cảm xúc với người tin tưởng."
},
{
  id: 17,
  question: "Bạn thấy bản thân không còn năng lượng như trước?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Một chút", value: { burnout: 1, lazy: 0 } },
    { text: "Khá rõ", value: { burnout: 2, lazy: 0 } },
    { text: "Rất rõ", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Tăng thời gian nghỉ ngơi và giảm lịch làm việc quá dày."
},
{
  id: 18,
  question: "Bạn dễ mệt hơn người khác với cùng khối lượng việc?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
    { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Kiểm tra lại giấc ngủ và chế độ dinh dưỡng."
},
{
  id: 19,
  question: "Bạn cần nghỉ dài ngày mới hồi phục năng lượng?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi khi", value: { burnout: 1, lazy: 0 } },
    { text: "Khá thường", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn cần", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Hãy lên kế hoạch nghỉ định kỳ thay vì chờ kiệt sức."
},
{
  id: 20,
  question: "Chỉ cần nghỉ 1–2 ngày là bạn ổn lại?",
  answers: [
    { text: "Đúng", value: { burnout: 0, lazy: 0 } },
    { text: "Khá đúng", value: { burnout: 1, lazy: 0 } },
    { text: "Không hẳn", value: { burnout: 2, lazy: 0 } },
    { text: "Không", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Nếu nghỉ ngắn không đủ, hãy xem lại mức độ căng thẳng hiện tại."
},
{
  id: 21,
  question: "Bạn thấy chán nản ngay cả khi không làm gì?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
    { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Thử hoạt động ngoài trời hoặc thay đổi môi trường."
},
{
  id: 22,
  question: "Bạn né tránh trách nhiệm vì sợ mệt?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 1 } },
    { text: "Khá thường", value: { burnout: 2, lazy: 2 } },
    { text: "Luôn luôn", value: { burnout: 2, lazy: 3 } }
  ],
  solution: "Chia nhỏ trách nhiệm để giảm cảm giác quá tải."
},
{
  id: 23,
  question: "Bạn vẫn cố gắng được nếu thật sự cần?",
  answers: [
    { text: "Luôn", value: { burnout: 0, lazy: 0 } },
    { text: "Thường", value: { burnout: 0, lazy: 1 } },
    { text: "Khó khăn", value: { burnout: 1, lazy: 1 } },
    { text: "Không thể", value: { burnout: 2, lazy: 2 } }
  ],
  solution: "Giữ thói quen kỷ luật nhẹ mỗi ngày."
},
{
  id: 24,
  question: "Bạn lười vì chưa có mục tiêu rõ ràng?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Có chút", value: { burnout: 0, lazy: 1 } },
    { text: "Khá đúng", value: { burnout: 1, lazy: 2 } },
    { text: "Rất đúng", value: { burnout: 1, lazy: 3 } }
  ],
  solution: "Xác định mục tiêu nhỏ trong tuần thay vì mục tiêu lớn."
},
{
  id: 25,
  question: "Bạn thấy cơ thể mệt trước khi tinh thần mệt?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
    { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Tăng vận động nhẹ để cải thiện thể lực."
},
{
  id: 26,
  question: "Bạn thấy tinh thần mệt trước khi cơ thể mệt?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
    { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Giảm thời gian tiếp xúc áp lực liên tục."
},
{
  id: 27,
  question: "Bạn cảm thấy bị mắc kẹt trong cuộc sống hiện tại?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đôi lúc", value: { burnout: 1, lazy: 0 } },
    { text: "Thường xuyên", value: { burnout: 2, lazy: 0 } },
    { text: "Luôn luôn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Thử học điều mới hoặc thay đổi thói quen nhỏ."
},
{
  id: 28,
  question: "Bạn chỉ lười khi không ai ép buộc?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Đúng một phần", value: { burnout: 0, lazy: 1 } },
    { text: "Khá đúng", value: { burnout: 1, lazy: 2 } },
    { text: "Rất đúng", value: { burnout: 1, lazy: 3 } }
  ],
  solution: "Tạo deadline cá nhân để duy trì động lực."
},
{
  id: 29,
  question: "Bạn cảm thấy cần được nghỉ ngơi nghiêm túc?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Có chút", value: { burnout: 1, lazy: 0 } },
    { text: "Khá cần", value: { burnout: 2, lazy: 0 } },
    { text: "Rất cần", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Hãy lên lịch nghỉ thật sự thay vì nghỉ trong lo lắng."
},
{
  id: 30,
  question: "Bạn tin rằng nghỉ ngơi là cần thiết lúc này?",
  answers: [
    { text: "Không", value: { burnout: 0, lazy: 0 } },
    { text: "Có lẽ", value: { burnout: 1, lazy: 0 } },
    { text: "Khá chắc", value: { burnout: 2, lazy: 0 } },
    { text: "Chắc chắn", value: { burnout: 3, lazy: 0 } }
  ],
  solution: "Cho bản thân thời gian phục hồi mà không cảm thấy tội lỗi."
}
];