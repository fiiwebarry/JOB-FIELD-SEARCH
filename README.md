# JOB-FIELD-SEARCH

Job Field Platform

A simple job feed platform with server-side filtering, pagination, and URL-synchronized filters, built using NestJS for the backend and React + Vite + TypeScript for the frontend. Users can browse, filter, and paginate through jobs by category, type, work mode, and experience level.

root/
├─ backend/ # NestJS backend API
│ ├─ src/
│ │ ├─ jobs/
│ │ │ ├─ jobs.controller.ts
│ │ │ ├─ jobs.service.ts
│ │ │ └─ dto/
│ │ │ ├─ job-response.dto.ts
│ │ │ └─ get-jobs-query.dto.ts
│ │ ├─ app.module.ts
│ │ └─ main.ts
│ └─ package.json
│
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ api/
│ │ │ └─ jobsApi.ts
│ │ ├─ components/
│ │ │ ├─ FilterSidebar.tsx
│ │ │ ├─ JobList.tsx
│ │ │ └─ Pagination.tsx
│ │ ├─ pages/
│ │ │ └─ JobsPage.tsx
│ │ ├─ App.tsx
│ │ └─ main.tsx
│ ├─ index.css
│ └─ package.json

🖥 Features
Browse Jobs: View all jobs with title, category, type, work mode, and experience.
Filters Sidebar: Filter jobs by category, type, work mode, and experience.
Pagination: Navigate pages horizontally with the current page highlighted.
URL Synchronization: Filters and page numbers reflected in the URL for shareable links.
Loading & Empty States: Handles loading, error, and no-results gracefully.
🛠 Tech Stack
Backend: NestJS, TypeScript
Frontend: React, Vite, TypeScript, Tailwind CSS
Validation: class-validator & class-transformer
Styling: Tailwind CSS for responsive layout and UI

Start backend:
cd backend
npm run start

Start frontend:
cd frontend
npm run dev

⚡ Notes
Backend uses in-memory data; no database required.
Tailwind CSS classes include responsive grids, spacing, shadows, and color utilities.
Filters and pagination are fully type-safe with TypeScript.
