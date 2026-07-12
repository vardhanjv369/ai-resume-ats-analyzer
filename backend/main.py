from fastapi import FastAPI, UploadFile
import pdfplumber
from ats import calculate_score
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze(file: UploadFile):

    text = ""

    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text

    result = calculate_score(text)

    return result