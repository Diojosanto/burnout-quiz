"use client";

import { useEffect, useState } from "react";
import questions from "./questions";

export default function Home() {
  const TOTAL_QUESTIONS = 10;

  const [started, setStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [burnoutPoint, setBurnoutPoint] = useState(0);
  const [done, setDone] = useState(false);

  // random 10 câu khi bắt đầu
  const startQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuiz(shuffled.slice(0, TOTAL_QUESTIONS));
    setIndex(0);
    setBurnoutPoint(0);
    setDone(false);
    setStarted(true);
  };

  const handleAnswer = (isYes) => {
    if (isYes) {
      setBurnoutPoint(
        (prev) => prev + quiz[index].burnoutScore
      );
    }

    if (index + 1 < quiz.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  };

  const burnoutPercent = Math.round(
    (burnoutPoint / quiz.length) * 100
  );

  const progressPercent = Math.round(
    ((index + (done ? 1 : 0)) / quiz.length) * 100
  );

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-zinc-900 rounded-2xl shadow-lg p-8 space-y-6">

        {/* MÀN HÌNH BẮT ĐẦU */}
        {!started && (
          <>
            <h1 className="text-3xl font-bold">🔥 Burnout Test</h1>
            <p className="text-zinc-300">
              Trả lời 10 câu hỏi ngẫu nhiên để phân biệt burnout và lười biếng.
            </p>
            <button
              onClick={startQuiz}
              className="mt-4 px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 transition font-semibold"
            >
              Bắt đầu
            </button>
          </>
        )}

        {/* ĐANG LÀM CÂU HỎI */}
        {started && !done && quiz.length > 0 && (
          <>
            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>
                  Câu {index + 1}/{quiz.length}
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-zinc-700 rounded-full">
                <div
                  className="h-2 bg-emerald-500 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <p className="text-lg mt-4">{quiz[index].text}</p>

            <div className="flex mt-4">
              <button
                onClick={() => handleAnswer(true)}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition font-semibold"
              >
                Có
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="px-6 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition font-semibold ml-4"
              >
                Không
              </button>
            </div>
          </>
        )}

        {/* KẾT QUẢ + GIẢI PHÁP */}
        {done && (
          <>
            <h2 className="text-2xl font-bold">Kết quả</h2>

            <p>🔥 Burnout: {burnoutPercent}%</p>
            <p>💤 Lười biếng / mệt tạm thời: {100 - burnoutPercent}%</p>

            {burnoutPercent >= 60 ? (
              <>
                <p className="mt-3 text-orange-400 font-semibold">
                  ⚠️ Bạn có dấu hiệu burnout khá rõ.
                </p>

                <div className="mt-3">
                  <h3 className="font-bold">Giải pháp đề xuất:</h3>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300">
                    <li>Thiết lập mạng lưới hỗ trợ tâm lý (bạn bè, gia đình, cố vấn).</li>
                    <li>Giảm tải công việc, chia nhỏ nhiệm vụ.</li>
                    <li>Duy trì sinh hoạt lành mạnh; cân nhắc hỗ trợ tâm lý chuyên môn.</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <p className="mt-3 text-emerald-400 font-semibold">
                  ✅ Có vẻ bạn chỉ mệt hoặc lười tạm thời.
                </p>

                <div className="mt-3">
                  <h3 className="font-bold">Giải pháp đề xuất:</h3>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300">
                    <li>Đặt mục tiêu nhỏ, rõ ràng để dễ bắt đầu.</li>
                    <li>Chia nhỏ công việc, áp dụng Pomodoro.</li>
                    <li>Rèn kỷ luật sinh hoạt và quản lý thời gian.</li>
                  </ul>
                </div>
              </>
            )}

            <button
              onClick={startQuiz}
              className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              🔄 Làm lại
            </button>
          </>
        )}
      </div>
    </div>
  );
}
