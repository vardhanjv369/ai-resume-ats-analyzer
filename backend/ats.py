required_skills = [
    "python",
    "react",
    "javascript",
    "sql",
    "git",
    "html",
    "css",
    "typescript",
    "tailwind"
]

def calculate_score(text):

    text = text.lower()

    matched = []

    missing = []

    for skill in required_skills:

        if skill in text:
            matched.append(skill)
        else:
            missing.append(skill)

    score = int((len(matched)/len(required_skills))*100)

    return {
        "score": score,
        "matched_skills": matched,
        "missing_skills": missing
    }