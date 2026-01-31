import { useState } from "react";
import "./index.css";

export default function App() {

  const [code, setCode] = useState(`function twoSum(nums, target) {
  const map = {};

  for(let i=0;i<nums.length;i++){
    const diff = target - nums[i];

    if(map[diff] !== undefined){
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9));`);

  const [output, setOutput] = useState("Waiting for execution...");
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(7);

  // Run Code
 const runCode = () => {
  if (code.trim() === "") {
    setOutput("⚠️ Please write your solution first.");
    return;
  }

  // Mock execution (safe, no eval)
  setOutput("✅ Code executed successfully. All test cases passed!");
};


  // Submit
  const submitCode = () => {
    setOutput("✅ Submitted! Evaluating your solution...");
    setStreak(streak + 1);
  };

  return (
    <div>

      {/* Header */}
      <header>
        <div>
          <h1>📘 Question of the Day</h1>
          <p>Build your daily DSA habit</p>
        </div>

        <div className="streak">🔥 {streak} Day Streak</div>
      </header>

      {/* CTA */}
      <div className="cta-bar">
        <button className="btn-primary">
          🚀 Solve Today’s Problem
        </button>
      </div>

      <div className="container">

        <main>

          {/* Question */}
          <section className="card highlight">

            <div className="question-header">
              <h2>Two Sum</h2>
              <span className="difficulty easy">Easy</span>
            </div>

            <p className="problem-text">
              Given an array of integers nums and a target,
              return indices such that they add up to target.
            </p>

            <pre>
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
            </pre>

          </section>

          {/* Editor */}
          <section className="card">

            <h3 className="card-title">💻 Your Solution</h3>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <div style={{ marginTop: "12px" }}>

              <button className="btn-primary" onClick={runCode}>
                ▶ Run
              </button>

              <button
                className="btn-outline"
                style={{ marginLeft: "10px" }}
                onClick={submitCode}
              >
                ✔ Submit
              </button>

            </div>

          </section>

          {/* Output */}
          <section className="card">

            <h3 className="card-title">📤 Output</h3>

            <div className="output">
              {output}
            </div>

            <p style={{ color: "#2563eb", marginTop: "10px" }}>
              💪 Keep going! Every problem makes you better.
            </p>

          </section>

          {/* Hint */}
          <section className="card">

            <h3 className="card-title">💡 Hint</h3>

            <button
              className="btn-outline"
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>

            {showHint && (
              <div className="hint-box">
                Use a hash map to store visited numbers.
              </div>
            )}

          </section>

        </main>

        {/* Sidebar */}
        <aside>

          {/* Stats */}
          <section className="card">

            <h3 className="card-title">📊 Today’s Stats</h3>

            <p>📈 Attempts: 12,845</p>
            <p>✅ Success: 68%</p>
            <p>🏆 Accepted: 1,025</p>

          </section>

          {/* Leaderboard */}
          <section className="card">

            <h3 className="card-title">🏆 Leaderboard</h3>

            <ul style={{ listStyle: "none" }}>
              <li>🥇 Rahul — 98%</li>
              <li>🥈 Aditi — 95%</li>
              <li>🥉 Neha — 93%</li>
              <li>Arjun — 90%</li>
            </ul>

          </section>

          {/* Subscribe */}
          <section className="card">

            <h3 className="card-title">🔔 Daily Reminder</h3>

            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <button className="btn-primary" style={{ width: "100%" }}>
              Notify Me
            </button>

          </section>

        </aside>

      </div>

      <p className="footer-note">
        © 2026 TechLearn Solutions | Build. Practice. Succeed.
      </p>

    </div>
  );
}
