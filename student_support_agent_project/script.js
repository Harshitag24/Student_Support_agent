/* Student Support Agent — Student Hub
   Front-end demo only: responses are generated locally using simple keyword matching.
   No external AI model or college records are connected.
*/
const messages = document.getElementById("messages");
const input = document.getElementById("question");
const form = document.getElementById("chatForm");
const clearButton = document.getElementById("clearChat");

const welcomeMessage = `Hi Harshita! 👋 Welcome to Student Hub.

I can help you plan study sessions, organise assignments, prepare for exams and viva, or practise programming concepts.

What would you like to work on today?`;

function getReply(raw) {
  const q = raw.toLowerCase().trim();

  if (/\b(hello|hi|hey|good morning|good afternoon|good evening)\b/.test(q)) {
    return `Hello! 😊 Welcome to Student Hub.

I can help with:
1. Study plans and timetables
2. Assignments and college projects
3. Exam revision and viva preparation
4. Java, JavaScript, Python, HTML, CSS, SQL, and basic DSA

What would you like to start with?`;
  }

  if (/\b(timetable|time table|study plan|schedule|routine|study hours|study planner|manage time|time management|productivity|procrastinat)\b/.test(q)) {
    return `Let's make your study plan manageable.

1. List your subjects and upcoming deadlines.
2. Choose 2–3 priorities for the day.
3. Work in focused 25–40 minute sessions, then take a short break.
4. Put difficult topics in a time when you usually feel alert.
5. Finish with 5–10 minutes of active recall: close your notes and explain what you learned.
6. Review the plan each evening and adjust it if needed.

Sample 2-hour session:
• 0:00–0:10 — choose goals and review yesterday
• 0:10–0:50 — study one topic
• 0:50–1:00 — break
• 1:00–1:35 — practise questions
• 1:35–1:45 — break
• 1:45–2:00 — recap and note doubts

Tell me your subjects, available hours, and exam dates, and I can tailor the timetable.`;
  }

  if (/\b(assignment|project|synopsis|report|submission|documentation|college project)\b/.test(q)) {
    return `Here is a practical assignment/project workflow:

1. Understand the task: underline the deliverables, format, and deadline.
2. Break it into small parts: research, outline/design, implementation or writing, testing, and review.
3. Create a first version early instead of waiting for it to be perfect.
4. Check each requirement against your teacher's rubric.
5. Proofread the report and verify screenshots, references, and file names.
6. Keep a backup copy and submit using the required format.

For a software project, prepare:
• Problem statement and objectives
• Tools/technology used
• Main features and workflow
• Screenshots or test cases
• Limitations and future scope

Share your topic and deadline, and I can help you create a step-by-step checklist. Make sure the final submission reflects your own work and your college's rules.`;
  }

  if (/\b(exam|revision|revise|test preparation|prepare for|last minute|two days|tomorrow exam)\b/.test(q)) {
    return `A focused exam revision plan:

1. Check the syllabus and mark topics as strong, medium, or difficult.
2. Start with high-priority topics your instructor emphasised.
3. Study one topic, close your notes, and write or explain the key points from memory.
4. Solve representative questions without checking the answer first.
5. Review mistakes and make a one-page formula/definition sheet where allowed.
6. Leave time for sleep, meals, and a final light review.

For a 2-day plan:
• Day 1: cover core concepts and make short notes.
• Day 2: practise questions, revisit weak areas, and rehearse important definitions.

Tell me the subject, syllabus, and time remaining to get a more specific plan.`;
  }

  if (/\b(viva|oral exam|viva questions|presentation)\b/.test(q)) {
    return `Use this simple viva-preparation method:

1. Prepare a 2–3 sentence explanation of the project or topic.
2. Learn the purpose of each important concept or technology.
3. Practise explaining the workflow in the correct order.
4. Prepare examples and be ready to explain your own code or decisions.
5. Review limitations, challenges, testing, and possible improvements.
6. Practise answering clearly; if you do not know something, say so honestly and explain what you do know.

Common project-viva prompts:
• What problem does your project solve?
• Why did you choose this technology?
• How does the system work from input to output?
• How did you test it?
• What would you improve next?

Tell me your subject or project title and I'll make a tailored practice set.`;
  }

  if (/\b(java|jvm|oop|object oriented)\b/.test(q)) {
    return `For Java, build your understanding in this order:

1. Basics: variables, data types, operators, input/output, and conditions.
2. Loops: for, while, do-while, and nested loops.
3. Methods, arrays, strings, and basic problem solving.
4. OOP: classes, objects, constructors, inheritance, polymorphism, abstraction, and encapsulation.
5. Collections and exception handling after the basics feel comfortable.

Practice routine:
• Read one concept.
• Type a small example yourself.
• Predict the output before running it.
• Change one thing and test again.
• Solve a beginner problem and explain your approach.

If you share a Java question or your code, I can explain it step by step and help debug it.`;
  }

  if (/\b(javascript|js|dom|event listener|web script)\b/.test(q)) {
    return `A good JavaScript learning path is:

1. Variables, data types, operators, and conditions.
2. Loops, functions, arrays, and objects.
3. Array methods such as map, filter, and find.
4. DOM selection and updating page content.
5. Events, form handling, and input validation.
6. JSON, fetch, and asynchronous basics when ready.

Mini practice ideas:
• Build a counter.
• Validate a simple form.
• Make a to-do list.
• Add a search/filter feature to a page.

For readable chat responses, use template literals with real line breaks, for example:
const message = \`First point
Second point
Third point\`;

When displaying plain text, the CSS white-space: pre-wrap rule preserves those line breaks.`;
  }

  if (/\b(python|py language)\b/.test(q)) {
    return `For Python, learn in this sequence:

1. Variables, types, input/output, and operators.
2. if/elif/else and loops.
3. Functions and scope.
4. Lists, tuples, sets, dictionaries, and strings.
5. File handling and exceptions.
6. Small problem-solving exercises.

Try a tiny program after every concept. Useful beginner exercises include a number checker, a simple calculator, word/character counting, and list operations. If you paste your code and the error, I can help you understand and fix it.`;
  }

  if (/\b(html|css|responsive|frontend|front end|website|web page|web development)\b/.test(q)) {
    return `For HTML and CSS, learn by building a small page:

1. HTML: headings, paragraphs, links, images, lists, forms, and semantic elements.
2. CSS: selectors, box model, spacing, typography, colours, and borders.
3. Layout: Flexbox and CSS Grid.
4. Responsive design: media queries and flexible widths.
5. Accessibility: labels, keyboard-friendly controls, contrast, and meaningful structure.

Suggested mini-project: create a student profile page, then make it work on both a laptop and phone. Use browser developer tools to inspect spacing and test different screen widths.`;
  }

  if (/\b(sql|database|mysql|query|dbms)\b/.test(q)) {
    return `A practical SQL learning path:

1. SELECT, FROM, and WHERE.
2. ORDER BY, DISTINCT, and LIMIT.
3. Aggregate functions: COUNT, SUM, AVG, MIN, and MAX.
4. GROUP BY and HAVING.
5. JOINs: INNER JOIN and LEFT JOIN first.
6. INSERT, UPDATE, and DELETE—practise carefully on sample data.
7. Primary keys, foreign keys, and basic database design.

Try writing each query against a small sample table and explain what rows it returns. Share a query or schema if you want help understanding the result.`;
  }

  if (/\b(dsa|data structure|algorithm|leetcode|coding problem|time complexity|big o|array|linked list|stack|queue|recursion|sorting|searching)\b/.test(q)) {
    return `For basic DSA, focus on understanding patterns instead of memorising solutions.

1. Arrays and strings
2. Frequency counting and hash maps
3. Two pointers and sliding window
4. Stacks and queues
5. Binary search
6. Linked lists and recursion
7. Sorting and basic trees

For each problem:
• Restate the problem in your own words.
• Work through a small example by hand.
• Write the simplest correct approach first.
• Check edge cases.
• Estimate time and space complexity.
• Review what you learned after solving it.

Aim for consistency: one carefully understood problem is more useful than rushing through several. Paste a problem statement or your attempt and I'll help you reason through it.`;
  }

  if (/\b(stress|overwhelmed|tired|burnout|motivation|motivated|can't focus|cannot focus|distracted)\b/.test(q)) {
    return `If everything feels like too much, make the next step smaller.

1. Write down what is on your mind.
2. Pick one task that can be started in 10 minutes.
3. Put away one distraction and work only on that step.
4. Take a short break when you need one.
5. Ask a classmate or instructor for clarification if you are stuck.

You don't need to solve the whole week at once. What is the one task that feels most urgent right now?`;
  }

  if (/\b(college|attendance|teacher|instructor|course|semester|marks|grade|portal|fees|timetable of classes|campus)\b/.test(q)) {
    return `I can help with general college planning, but I don't have access to your college's private portal, attendance, marks, fees, or official timetable.

You can:
1. Check the official student portal or college notice.
2. Confirm deadlines and policies with your department or instructor.
3. Keep a note of the date, required action, and contact person.
4. Ask me to draft a polite message to your instructor if you need clarification.

If you tell me the situation (without sharing passwords or private account details), I can help you plan the next step.`;
  }

  if (/\b(thank|thanks|thank you)\b/.test(q)) {
    return `You're welcome! 😊

I'm here to help with your study plan, assignments, exam revision, viva preparation, and coding practice. What would you like to work on next?`;
  }

  if (/\b(help|what can you do|features|options)\b/.test(q)) {
    return `Here's what I can help you with:

1. Study planning and weekly timetables
2. Assignment, report, and project checklists
3. Exam revision and viva preparation
4. Java, JavaScript, Python, HTML, CSS, and SQL learning paths
5. Basic DSA concepts and problem-solving approaches
6. Productivity and time-management ideas
7. General college communication and planning

Try one of the suggested questions, or type your own question above.`;
  }

  return `I can help you work through that. To give you a useful answer, tell me a little more about your goal or the subject.

I can support:
1. Study planning and time management
2. Assignments and college projects
3. Exam revision and viva preparation
4. Java, JavaScript, Python, HTML, CSS, SQL, and basic DSA
5. General college planning

This demo uses predefined local responses, so it does not connect to a live AI model or college records.`;
}

function addMessage(text, role) {
  const row = document.createElement("div");
  row.className = `message-row ${role === "user" ? "user-row" : "bot-row"}`;

  if (role !== "user") {
    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = "✦";
    row.appendChild(avatar);
  }

  const content = document.createElement("div");
  content.className = "message-content";

  const sender = document.createElement("div");
  sender.className = "sender";
  sender.textContent = role === "user" ? "You • just now" : "Student Support • just now";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  // textContent avoids interpreting user input as HTML.
  // white-space: pre-wrap in CSS preserves actual newline characters.
  bubble.textContent = text;

  content.append(sender, bubble);
  row.appendChild(content);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage(value) {
  const question = value.trim();
  if (!question) {
    input.focus();
    return;
  }
  addMessage(question, "user");
  addMessage(getReply(question), "bot");
  input.value = "";
  input.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => sendMessage(button.dataset.prompt));
});

clearButton.addEventListener("click", () => {
  messages.replaceChildren();

  const divider = document.createElement("div");
  divider.className = "date-divider";
  divider.innerHTML = "<span></span><small>NEW CONVERSATION</small><span></span>";
  messages.appendChild(divider);
  addMessage(welcomeMessage, "bot");
  input.value = "";
  input.focus();
});

document.getElementById("mobileMenu").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

document.getElementById("navChat").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
  input.focus();
});
