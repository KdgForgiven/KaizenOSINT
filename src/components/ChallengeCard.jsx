import { useState } from "react";

export default function ChallengeCard({ challenge }) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (input.toLowerCase() === challenge.answer.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Fout antwoord.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">{challenge.title}</h2>
      <p className="mb-4">{challenge.description}</p>
      <input
        type="text"
        placeholder="Jouw antwoord"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Beantwoord
      </button>
      {feedback && <p className="mt-2 font-medium">{feedback}</p>}
    </div>
  );
}
