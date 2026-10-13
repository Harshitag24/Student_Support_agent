# Student Support Agent — Student Hub

**Developer:** Harshita Gautam  
**Technology:** HTML, CSS, JavaScript  
**Project type:** Front-end educational chatbot prototype

## Run the project

1. Download and extract `Student_Support_Agent_Student_Hub.zip`.
2. Open the extracted `student_support_agent_project` folder in VS Code.
3. Open `index.html` in a browser.

You can also install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**. No npm install, API key, database, or backend is required.

## Features

- Responsive blue-and-white student dashboard
- Original SH cloud-style mark (not an official Salesforce logo)
- Chat interface with online status, bot avatar, message bubbles, suggested prompts, and Clear Chat
- Local rule-based responses for study plans, assignments, projects, exams, viva preparation, productivity, college guidance, and Java, JavaScript, Python, HTML, CSS, SQL, and basic DSA
- Real line breaks and numbered lists preserved using template literals, `textContent`, and CSS `white-space: pre-wrap`
- Mobile sidebar toggle
- User input is inserted with `textContent` rather than interpreted as HTML

## Important demo note

This is a **front-end prototype**. The chatbot selects predefined responses using JavaScript keyword matching. It is not connected to a live AI model, Salesforce org, college database, or student portal. Do not present it as a production AI integration.

## Project structure

```text
student_support_agent_project/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Suggested classroom demonstration

1. Open the page and point out the dashboard, developer name, and responsive layout.
2. Click **Make a study timetable** and show the numbered, multi-line response.
3. Ask a coding question such as “How do I start learning Java and DSA?”
4. Ask about viva preparation or an assignment.
5. Click **Clear chat** and show the new-conversation state.
6. If asked about limitations, explain that it is a local rule-based prototype and could later be connected to a secure backend and an approved AI API.
