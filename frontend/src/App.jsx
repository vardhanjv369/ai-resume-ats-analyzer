import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadResume = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:8000/analyze",
      formData
    );

    setResult(response.data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Resume ATS Analyzer</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={uploadResume}>
        Analyze Resume
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>ATS Score: {result.score}</h2>

          <h3>Matched Skills</h3>
          <ul>
            {result.matched_skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h3>Missing Skills</h3>
          <ul>
            {result.missing_skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;