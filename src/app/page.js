"use client";

import { useState } from "react";
import questions from "./questions";
import Image from "next/image";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // =====================
  // HANDLE ANSWER
  // =====================
  const handleAnswer = (value) => {
    const newScore = score + value;
    setScore(newScore);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  // =====================
  // RESULT + SOLUTIONS
  // =====================
  const getResult = () => {
    if (score <= 6) {
      return {
        title: "Bạn đang ổn 👍",
        desc: "Bạn chưa có dấu hiệu burnout rõ ràng. Hãy tiếp tục duy trì thói quen tốt.",
        solutions: [
          "Duy trì ngủ đủ giấc và vận động nhẹ mỗi ngày",
          "Giữ lịch học/làm việc cân bằng",
          "Dành thời gian thư giãn để tránh kiệt sức",
        ],
      };
    }

    if (score <= 10) {
      return {
        title: "Bạn có dấu hiệu Burnout nhẹ ⚠️",
        desc: "Bạn đang bắt đầu mất năng lượng và động lực.",
        solutions: [
          "Chia nhỏ công việc để giảm áp lực",
          "Thiết lập mục tiêu ngắn hạn rõ ràng",
          "Tìm sự hỗ trợ từ bạn bè hoặc gia đình",
        ],
      };
    }

    return {
      title: "Nguy cơ Burnout cao 🚨",
      desc:
        "Bạn có dấu hiệu kiệt sức rõ rệt. Nên nghỉ ngơi và điều chỉnh lại nhịp độ học tập/làm việc.",
      solutions: [
        "Giảm khối lượng công việc và nghỉ ngơi có kế hoạch",
        "Duy trì thói quen sinh hoạt lành mạnh",
        "Cân nhắc tham vấn tâm lý hoặc mindfulness",
      ],
    };
  };

  const result = getResult();

  // =====================
  // RESULT PAGE
  // =====================
  if (finished) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 p-6">
        <div className="bg-white max-w-xl w-full rounded-3xl shadow-xl p-8 text-center space-y-6">
          
          {/* RESULT */}
          <h1 className="text-3xl font-bold text-gray-800">
            {result.title}
          </h1>

          <p className="text-gray-600">{result.desc}</p>

          {/* ===== SOLUTIONS SECTION ===== */}
          <div className="bg-gray-50 rounded-2xl p-5 text-left">
            <h2 className="font-semibold text-lg mb-3 text-gray-800">
              🌱 Gợi ý dành cho bạn
            </h2>

            <ul className="space-y-2 text-gray-700">
              {result.solutions.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>✔️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== QR CODE ===== */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-gray-500">
              Quét QR để xem thêm tài liệu hỗ trợ
            </p>

            <Image
              src="/qr.jpg"
              alt="QR Code"
              width={180}
              height={180}
              className="rounded-xl shadow-md"
            />
          </div>

          {/* RESTART */}
          <button
            onClick={() => {
              setIndex(0);
              setScore(0);
              setFinished(false);
            }}
            className="mt-4 w-full py-3 bg-purple-400 hover:bg-purple-500 text-white rounded-xl transition"
          >
            Làm lại bài test
          </button>
        </div>
      </main>
    );
  }

  // =====================
  // QUESTION PAGE
  // =====================
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 p-6">
      <div className="bg-white max-w-xl w-full rounded-3xl shadow-xl p-8 space-y-6 text-center">

        <h2 className="text-sm text-gray-400">
          Câu {index + 1} / {questions.length}
        </h2>

        <h1 className="text-xl font-semibold text-gray-800">
          {questions[index].question}
        </h1>

        <div className="space-y-3">
          {questions[index].answers.map((ans, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(ans.value)}
              className="w-full py-3 bg-purple-100 hover:bg-purple-200 rounded-xl transition text-gray-800"
            >
              {ans.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}