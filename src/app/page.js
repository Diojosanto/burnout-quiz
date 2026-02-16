"use client";

import { useState } from "react";
import { questions as allQuestions } from "./questions";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  const [burnoutScore, setBurnoutScore] = useState(0);
  const [lazyScore, setLazyScore] = useState(0);

  const [solutions, setSolutions] = useState([]);

  // ===== RANDOM 10 QUESTIONS =====
  const randomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  };

  // ===== START QUIZ =====
  const startQuiz = () => {
    setQuestions(randomQuestions());
    setStarted(true);
    setFinished(false);
    setIndex(0);
    setBurnoutScore(0);
    setLazyScore(0);
    setSolutions([]);
  };

  // ===== ANSWER =====
  const answerQuestion = (answer) => {
    const q = questions[index];

    setBurnoutScore((prev) => prev + answer.value.burnout);
    setLazyScore((prev) => prev + answer.value.lazy);

    // lưu solution của câu đó
    if (q.solution) {
      setSolutions((prev) => [...prev, q.solution]);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  // ===== RESULT % =====
  const total = burnoutScore + lazyScore || 1;
  const burnoutPercent = Math.round((burnoutScore / total) * 100);
  const lazyPercent = 100 - burnoutPercent;

  // ================= START SCREEN =================
  if (!started) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f4ea] via-[#eef7f2] to-[#f4fbf7]">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
          <h1 className="text-3xl font-bold text-black mb-4">
            Burnout or Lazy?
          </h1>

          <p className="text-gray-700 mb-6">
            Một bài test nhỏ giúp bạn hiểu bản thân đang kiệt sức hay chỉ
            thiếu động lực tạm thời 🌿
          </p>

          <button
            onClick={startQuiz}
            className="px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-500 transition"
          >
            Bắt đầu
          </button>
        </div>
      </main>
    );
  }

  // ================= RESULT =================
  if (finished) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#e6f4ea] via-[#eef7f2] to-[#f4fbf7]">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl text-center">

          <h2 className="text-3xl font-bold text-black mb-6">
            Kết quả của bạn
          </h2>

          {/* Percent Result */}
          <div className="space-y-4 mb-6">
            <p className="text-xl text-black font-semibold">
              Burnout: {burnoutPercent}%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-emerald-400 h-4 rounded-full"
                style={{ width: `${burnoutPercent}%` }}
              />
            </div>

            <p className="text-xl text-black font-semibold">
              Lười biếng: {lazyPercent}%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-300 h-4 rounded-full"
                style={{ width: `${lazyPercent}%` }}
              />
            </div>
          </div>

          {/* MESSAGE */}
          <p className="text-gray-800 mb-6 leading-relaxed">
            {burnoutPercent >= lazyPercent
              ? "Bạn đang có dấu hiệu burnout. Hãy nghỉ ngơi và chăm sóc bản thân nhiều hơn 🌿"
              : "Bạn có thể chỉ đang thiếu động lực tạm thời. Một chút kỷ luật nhẹ sẽ giúp bạn quay lại nhịp độ 💚"}
          </p>

          {/* SOLUTIONS */}
          <div className="text-left bg-[#f3faf6] p-5 rounded-xl mb-6">
            <h3 className="font-bold text-black mb-2">
              🌱 Gợi ý dành cho bạn:
            </h3>

            <ul className="list-disc pl-5 text-gray-800 space-y-1">
              {[...new Set(solutions)].slice(0, 5).map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>
          </div>

          {/* QR */}
          <p className="italic text-gray-700 mb-3">
            Nếu bạn vẫn còn đắn đo với lựa chọn của mình thì hãy tham khảo đây nhá
          </p>

          <img
            src="/qr.jpg"
            alt="QR"
            className="mx-auto w-52 rounded-xl shadow-md"
          />

          <button
            onClick={startQuiz}
            className="mt-8 px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-500 transition"
          >
            Làm lại bài test
          </button>
        </div>
      </main>
    );
  }

  // ================= QUESTIONS =================
  const current = questions[index];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f4ea] via-[#eef7f2] to-[#f4fbf7]">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md text-center">

        <p className="text-sm text-gray-600 mb-3">
          Câu {index + 1} / {questions.length}
        </p>

        <h2 className="text-xl font-semibold text-black mb-6">
          {current?.question}
        </h2>

        <div className="space-y-3">
          {current?.answers.map((ans, i) => (
            <button
              key={i}
              onClick={() => answerQuestion(ans)}
              className="w-full py-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-black font-medium transition"
            >
              {ans.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}