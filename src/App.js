import ChallengeCard from "./components/ChallengeCard";
import { challenges } from "./data/challenges";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">🕵️ OSINT Challenges</h1>
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
}

export default App;
