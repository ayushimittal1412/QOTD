# QOTD – Question of the Day Platform

A responsive and interactive frontend application that provides a daily DSA coding challenge for students. The platform is designed to encourage consistent practice through gamification, progress tracking, and peer comparison.

---

## Tech Stack Used

- React.js (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3 (Custom Styling)
- Git & GitHub
- Vercel (Deployment)

---

## Design & Layout Decisions

### 1. Visual Theme
- Used only shades of blue for a clean and consistent UI.
- Blue represents trust, learning, and focus.
- Gradient headers and cards enhance visual appeal.

### 2. Layout Structure
- Two-column layout on desktop:
  - Left: Main coding area
  - Right: Stats, leaderboard, reminders
- Single-column layout on mobile for better usability.

### 3. Information Hierarchy
- Question and code editor are given maximum priority.
- Primary CTA (Run / Submit) is placed near the editor.
- Secondary elements (stats, hints, leaderboard) are placed on the sidebar.

### 4. Responsiveness
- Implemented responsive grid layout.
- Optimized for mobile, tablet, and desktop devices.

---

## Key Features

### Daily Coding Challenge
- Displays a daily DSA problem with difficulty level.
- Shows example input/output.

### Code Editor & Execution
- In-browser code editor.
- Mock code execution using JavaScript `eval`.
- Displays output and error messages.

### Gamification
- Streak counter
- Progress indicator
- Motivational messages

### Statistics Dashboard
- Attempts
- Success rate
- Accepted solutions

### Leaderboard
- Displays top-performing students.
- Encourages healthy competition.

### Hint System
- Toggle-based hint display.
- Helps students without giving full solutions.

### Notification System
- Email input for daily reminders.
- Encourages habit formation.

---

## How This Platform Encourages Daily Engagement

1. Streak System  
   → Motivates users to solve problems daily.

2. Leaderboard  
   → Creates peer competition.

3. Instant Feedback  
   → Output shown immediately after execution.

4. Progress Tracking  
   → Weekly progress and statistics.

5. Reminder Feature  
   → Keeps users consistent.

6. Clean UI  
   → Reduces distractions and improves focus.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
