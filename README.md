# Lowkey — Campus-Exclusive Dating & Connections

> "Lowkey into someone? So is your campus."

Lowkey is a private, college-exclusive dating and social connections Android app built specifically for Indian college students. Signups are strictly gated by verified college email domains (e.g. `@acropolis.in`), ensuring every campus is its own isolated, trusted universe.

Domain: **[lowkeysocial.in](https://lowkeysocial.in)**  
Founder: **Aryan Gupta** (Acropolis Institute of Technology and Research, Indore)

---

## 🌟 Key Features

- **College-Email-Only Verification:** Zero outsiders. Students only ever interact with students from their own college.
- **Swipe Deck:** 8 curated free swipes per day, with 10 extra swipes available for ₹29.
- **The Crush List:** Add someone secretly. If they add you back, both of you are revealed. If not, nobody ever knows.
- **Daily Campus Picks:** 5 fresh students matched on shared interests every 24 hours, never repeated for 30 days.
- **Mutual-Only Real-Time Chat:** Chat unlocks only upon a mutual match or mutual crush reveal. No unsolicited DMs.
- **Full Safety Controls:** In-app report, block, unmatch, and complete account hard deletion anytime.
- **Proximity Reveal (Coming Soon):** Mutual crushes can sense each other on campus in person without storing GPS location history.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Styling:** Tailwind CSS v4, custom CSS variables design system
- **3D & Visuals:** Three.js, Canvas, Framer Motion
- **Animations & Smooth Scroll:** GSAP, ScrollTrigger, Lenis smooth scroll
- **Database & Auth Backend:** Supabase (`@supabase/supabase-js`)
- **Icons:** Lucide React
- **Typography:** Clash Display (Headings), Satoshi (Body), JetBrains Mono (Labels & Code)

---

## 📦 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/aryan555/lowkey-website.git
cd "lowkey social website"
npm install
```

### 2. Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APK_URL=/downloads/lowkey.apk
```

> **Note:** The app works smoothly in preview mode even before Supabase is connected; waitlist submissions and download telemetry fail gracefully and record locally.

### 3. Place Android APK & Founder Image

- Drop your compiled APK at:
  ```
  public/downloads/lowkey.apk
  ```
- Drop your founder photo at:
  ```
  public/founder.jpg
  ```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

### Method 1: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your project and deploy.

### Method 2: Deploy via Vercel Web Dashboard

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APK_URL` (set to your hosted APK URL or `/downloads/lowkey.apk`)
5. Click **Deploy**.

---

## 🗄️ Supabase Database Schema

To support the APK download counter and campus waitlist in Supabase, run the following SQL snippet in your Supabase SQL Editor:

```sql
-- 1. Waitlist Table
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  domain text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Downloads Table & RPC
create table if not exists app_analytics (
  id serial primary key,
  metric_name text unique not null,
  count bigint default 0 not null
);

insert into app_analytics (metric_name, count)
values ('apk_downloads', 0)
on conflict (metric_name) do nothing;

create or replace function increment_downloads()
returns void as $$
begin
  update app_analytics
  set count = count + 1
  where metric_name = 'apk_downloads';
end;
$$ language plpgsql security definer;
```

---

## 📄 License & Ownership

Copyright &copy; 2026 Lowkey Social. All rights reserved. Designed and developed by Aryan Gupta.
