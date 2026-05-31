# EduPulse — Next-Gen Student Analytics Dashboard

A highly performant, dynamic academic dashboard for tracking semestral progress, courses, and calendar schedules. Designed as a proof-of-concept student panel built on Next.js 16 (App Router), Tailwind CSS (v4), Framer Motion, and `@supabase/ssr`.

## Quick Setup

### 1. Install packages
```bash
npm install
```

### 2. Configure Local Variables
Duplicate `.env.example` as `.env.local` and populate your Supabase connection parameters:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

### 3. Spin up development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the client panel.

---

## Technical Stack & Architecture

### 📂 Architecture Highlights
* **`src/proxy.ts` (Next.js 16)**: Outfitted to intercept requests, read local JWT tokens, and trigger auth session updates on matching pages seamlessly.
* **`dashboard-shell.tsx`**: Manages responsive containers, expanding sidebar states on wide displays, and rendering bottom-navigation bars on mobile screens automatically.
* **`course-grid.tsx`**: CSS-Grid based custom layout that maps tiles (like `stats-card.tsx`, `ActivityTile.tsx`, and `CourseCard.tsx`) sequentially on mounting.
* **GPU scale transitions**: Animated progress meters (`ProgressBar.tsx`) scale solely on the `scaleX` GPU-bound transform parameter (pivoting on `originX: 0`), preventing dynamic page layout shifts.

### 📝 Database Schema Setup
To sync course cards dynamically, create a `courses` table inside your Supabase project:
```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer default 0,
  icon_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

*Note: Supported `icon_name` options in the frontend include: `Code2`, `Sparkles`, `Braces`, and `Database`.*
