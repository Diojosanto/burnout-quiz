"use client";

import { useState } from "react";
import questions from "./questions";

export default function Home() {
  const TOTAL_QUESTIONS = 10;

  const [started, setStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [burnoutPoint, setBurnoutPoint] = useState(0);
  const [done, setDone] = useState(false);

  // Bắt đầu quiz → random 10 câu
  const startQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuiz(shuffled.slice(0, TOTAL_QUESTIONS));
    setIndex(0);
    setBurnoutPoint(0);
    setDone(false);
    setStarted(true);
  };

  // Trả lời câu hỏi
  const handleAnswer = (isYes) => {
    if (isYes) {
      setBurnoutPoint((prev) => prev + quiz[index].burnoutScore);
    }

    if (index < quiz.length - 1) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  };

  // % burnout
  const burnoutPercent =
    quiz.length === 0
      ? 0
      : Math.round((burnoutPoint / quiz.length) * 100);

  // % progress
  const progressPercent =
    quiz.length === 0
      ? 0
      : Math.round(((index + 1) / quiz.length) * 100);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-zinc-900 rounded-2xl shadow-xl p-8 space-y-6">

        {/* ===== MÀN HÌNH BẮT ĐẦU ===== */}
        {!started && (
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">🔥 Burnout Test</h1>
            <p className="text-zinc-300">
              Trả lời 10 câu hỏi ngẫu nhiên để phân biệt burnout và lười biếng.
            </p>
            <button
              onClick={startQuiz}
              className="px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 transition font-semibold"
            >
              Bắt đầu
            </button>
          </div>
        )}

        {/* ===== ĐANG LÀM QUIZ ===== */}
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

            {/* Câu hỏi */}
            <p className="text-lg mt-6">{quiz[index].text}</p>

            {/* Nút trả lời */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition font-semibold"
              >
                Có
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 px-6 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition font-semibold"
              >
                Không
              </button>
            </div>
          </>
        )}

        {/* ===== KẾT QUẢ + GIẢI PHÁP ===== */}
        {done && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">📊 Kết quả</h2>

            <p>🔥 Burnout: {burnoutPercent}%</p>
            <p>💤 Mệt / lười tạm thời: {100 - burnoutPercent}%</p>

            {burnoutPercent >= 60 ? (
              <>
                <p className="text-orange-400 font-semibold">
                  ⚠️ Bạn có dấu hiệu burnout khá rõ.
                </p>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  <li>Giảm tải công việc, chia nhỏ nhiệm vụ.</li>
                  <li>Tìm hỗ trợ từ bạn bè, gia đình hoặc cố vấn.</li>
                  <li>Cân nhắc tư vấn tâm lý nếu kéo dài.</li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-emerald-400 font-semibold">
                  ✅ Bạn có vẻ chỉ mệt hoặc thiếu động lực tạm thời.
                </p>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  <li>Đặt mục tiêu nhỏ, rõ ràng.</li>
                  <li>Áp dụng Pomodoro.</li>
                  <li>Giữ nhịp sinh hoạt đều đặn.</li>
                </ul>
              </>
            )}

            <button
              onClick={startQuiz}
              className="mt-4 w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              🔄 Làm lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
