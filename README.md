## SoloForge — Reactify TS

────────────────────────────────────────────

Next.js Project Setup and Basics

────────────────────────────────────────────

## Project Snapshot

**Title:** SoloForge — Reactify TS  
**Scope:** Next.js + TypeScript + Tailwind CSS — fundamentals to reusable components, routing, API integration, and project structure.

---

## 🎯 Purpose

A clear, hands-on guide to scaffold a modern Next.js TypeScript project and implement core UI building blocks (Header, Buttons, Cards, Modals, PostCard, UserCard). Emphasis on reusable components, strong typing, and responsive styling with Tailwind CSS.

---

## Required Tools & Knowledge

- Node.js (v16+)
- npm or yarn
- Git + GitHub account
- Basic React & TypeScript knowledge
- Familiar with HTML/CSS
- Recommended editor: VS Code

---

────────────────────────────────────────────
🎯 Key Features
────────────────────────────────────────────
🧭 Core Pages & Routing: - Home, About, Posts, Users - Unified Header navigation

🧩 Reusable Components: - Card, Button, PostModal - PostCard & UserCard for API data

🌐 API Integration: - Fetches posts and users dynamically - Demonstrates props, state, and rendering patterns

🛠 Developer-Friendly Setup: - TypeScript interfaces for all components - ESLint and clean folder structure - Modular and maintainable code

────────────────────────────────────────────
🗂 Conceptual Project Layout
────────────────────────────────────────────
alx-project-0x02/
├── components/
│ ├── common/ → Card, Button, PostCard, PostModal, UserCard
│ └── layout/ → Header
├── interfaces/ → CardProps, ButtonProps, PostProps, UserProps
├── pages/ → index.tsx, home.tsx, about.tsx, posts.tsx, users.tsx
├── public/ → assets/images/
├── styles/ → globals.css
├── tsconfig.json
├── next.config.js
├── .eslintrc.json
├── package.json
└── README.md

────────────────────────────────────────────
🎨 UI & Styling Notes
────────────────────────────────────────────

- Tailwind utility-first classes for spacing, typography, and responsiveness
- Mobile-first design and semantic HTML
- Accessible attributes (aria-\*) for buttons and modals
- Consistent spacing system (p-4, m-4, space-y-4)

────────────────────────────────────────────
♿ Accessibility Highlights
────────────────────────────────────────────

- Focus trapped inside modals
- Keyboard-accessible buttons and navigation
- Alt text for images and semantic layout elements

────────────────────────────────────────────
💡 Component Contracts (Conceptual)
────────────────────────────────────────────
CardProps → title: string, content: string | ReactNode
ButtonProps → onClick?, size?, shape?, children: ReactNode
PostProps → id, title, body, userId?
UserProps → id, name, email, address {street, suite, city, zipcode?}

---

────────────────────────────────────────────
🖥 How to Clone & Use This code
────────────────────────────────────────────

1️⃣ Clone the repository
──────────────────────
git clone https://github.com/Deremas/alx-project-0x02-setup.git
cd alx-project-0x02-setup/alx-project-0x02

2️⃣ Install dependencies
──────────────────────

# Using npm

npm install

# Or using yarn

yarn install

3️⃣ Run the development server
──────────────────────────────

# Start locally on http://localhost:3000

npm run dev

4️⃣ Verify
──────────────────────

- Open browser: http://localhost:3000
- Check navigation: /home, /about, /posts, /users
- Test modals, buttons, and API-loaded content

5️⃣ Build for production (optional)
──────────────────────────────
npm run build
npm start

6️⃣ Notes
──────────────────────

- Ensure Node.js v16+ is installed
- Tailwind CSS is already configured
- ESLint is included for code quality checks
- Project is structured modularly: components, interfaces, pages
  ────────────────────────────────────────────

────────────────────────────────────────────
🔑 Notes for Future Developers
────────────────────────────────────────────

- This README is informational, not step-by-step instructions
- Interfaces, component contracts, and behaviors are fully described
- Clone the repo to explore structure, conventions, and reusable patterns
- Focus on modularity, maintainability, and clean code
  ────────────────────────────────────────────

---

## Developer

Developer: Dereje Masresha | GitHub: [Deremas](https://github.com/Deremas)

---
