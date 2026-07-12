# AI Resume ATS Analyzer

A full-stack Resume ATS (Applicant Tracking System) Analyzer built using React and FastAPI. The application allows users to upload resumes in PDF format, analyzes resume content, calculates an ATS score, and identifies matched and missing skills.

## 🚀 Features

- Upload PDF resumes
- Extract text from resumes automatically
- ATS score calculation
- Skill matching against job requirements
- Missing skill detection
- FastAPI backend API
- React frontend dashboard
- Real-time analysis results

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- JavaScript

### Backend
- FastAPI
- Python
- PDFPlumber
- Uvicorn

### Tools
- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```text
ats-analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── main.py
│   ├── ats.py
│   ├── requirements.txt
│   └── ...
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/vardhanjv369/ai-resume-ats-analyzer.git

cd ai-resume-ats-analyzer
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📊 How It Works

1. User uploads a PDF resume.
2. Backend extracts text using PDFPlumber.
3. ATS engine analyzes resume skills.
4. Score is calculated based on matching skills.
5. Results display:
   - ATS Score
   - Matched Skills
   - Missing Skills

---

## 📸 Screenshots

### Home Page

Add screenshot here

### ATS Analysis Result

Add screenshot here

---

## 🎯 Future Enhancements

- AI-powered resume suggestions
- Job Description Matching
- Resume Improvement Recommendations
- Keyword Optimization
- Resume Ranking System
- Gemini/OpenAI Integration
- Export ATS Report as PDF

---

## 💡 Learning Outcomes

This project helped me learn:

- Full Stack Development
- REST API Development
- React Frontend Development
- FastAPI Backend Development
- PDF Processing
- Git & GitHub Workflow
- Frontend-Backend Integration

---

## 👨‍💻 Author

**Vardhan J V**

B.Tech – Artificial Intelligence & Data Science

GitHub: https://github.com/vardhanjv369

LinkedIn: Add your LinkedIn profile here

---

## ⭐ Support

If you like this project, please consider giving it a star on GitHub.